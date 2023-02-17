import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Listing, ListingDocument } from '../schema/listing.schema';
import { Agent, AgentDocument } from '../schema/agent.schema';

@Injectable()
export class ListingService {
    constructor(
        @InjectModel(Listing.name) private readonly listingModel: Model<ListingDocument>,
        @InjectModel(Agent.name) private agentModel: Model<AgentDocument>
    ) { }

    async findAll(): Promise<Listing[]> {
        return await this.listingModel.find().populate('organisation').exec();
    }

    async create(listing: Listing): Promise<Listing> {
        return await new this.listingModel({
            ...listing
        }).save();
    }

    async findListingByAgentId(agent: string): Promise<Listing[]> {
        return await this.listingModel.find({
            agent: agent
        }).populate('organisation')
            .populate('agent')
            .exec()
    }

    async findListingByOrgId(org: string): Promise<Listing[]> {
        return await this.listingModel.find({
            organisation: org
        }).lean()
            .populate('organisation')
            .populate('agent')
            .exec()
    }
}
