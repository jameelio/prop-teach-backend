import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Organisation, OrganisationSchema } from '../schema/organisation.schema';
import { OrganisationService } from './organisation.service';
import { OrganisationController } from './organisation.controller';

@Module({
  providers: [OrganisationService],
  controllers: [OrganisationController],
  imports: [MongooseModule.forFeature([{
    name: Organisation.name,
    schema: OrganisationSchema
  }])]
})
export class OrganisationModule { }
