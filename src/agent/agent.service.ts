import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { clear } from 'console';
import { Model } from 'mongoose';

import { Agent, AgentDocument } from '../schema/agent.schema';
import { Listing, ListingDocument } from '../schema/listing.schema';

@Injectable()
export class AgentService {
    constructor(
        @InjectModel(Agent.name) private readonly model: Model<AgentDocument>,
        @InjectModel(Listing.name) private listingModel: Model<ListingDocument>) { }

    async findAll(): Promise<Agent[]> {
        return await this.model.find().exec();
    }

    async create(agent: Agent): Promise<Agent> {
        return await new this.model({
            ...agent,
            createdAt: new Date(),
        }).save();
    }

    async getAgentByOrgId(orgId: string): Promise<any[]> {
        const results = await this.listingModel.find({
            'organisation': orgId
        }, { 'agent': 1, '_id': 0 }).populate('agent')

        return results

    }

}
