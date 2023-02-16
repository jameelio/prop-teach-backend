import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AgentModule } from './agent/agent.module';
import { ListingModule } from './listing/listing.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI), AgentModule, ListingModule],
  controllers: [AppController],
  providers: [AppService],
})




export class AppModule { }
