// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();

//   await app.listen(8081, '0.0.0.0');
// }
// bootstrap();

import { Server } from 'http';
import { APIGatewayEvent, Context } from 'aws-lambda';
import * as serverlessExpress from 'aws-serverless-express';
import express from 'express';
import { Express } from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';

let lambdaProxy: Server;

async function bootstrap() {
  const expressServer: Express = express();
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressServer),
  );
  nestApp.enableCors();
  await nestApp.init();
  return serverlessExpress.createServer(expressServer, null, []);
}

bootstrap().then((server) => (lambdaProxy = server));

function waitForServer(event: any, context: any) {
  setImmediate(() => {
    if (!lambdaProxy) {
      waitForServer(event, context);
    } else {
      serverlessExpress.proxy(lambdaProxy, event, context);
    }
  });
}

export const handler = (event: APIGatewayEvent, context: Context) => {
  if (lambdaProxy) {
    serverlessExpress.proxy(lambdaProxy, event, context as any);
  } else {
    waitForServer(event, context);
  }
};
