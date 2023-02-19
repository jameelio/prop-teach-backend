import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Listing, ListingSchema } from '../schema/listing.schema';

import { AgentSchema, Agent } from '../schema/agent.schema';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';


@Module({
    providers: [AgentService],
    controllers: [AgentController],
    imports: [MongooseModule.forFeature([
        {
            name: Agent.name,
            schema: AgentSchema
        },
        ,
        {
            name: Listing.name,
            schema: ListingSchema

        }
    ])]
})
export class AgentModule { }
