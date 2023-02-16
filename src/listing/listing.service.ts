import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Listing, ListingDocument } from '../schema/listing.schema';

@Injectable()
export class ListingService {
    constructor(@InjectModel(Listing.name) private readonly model: Model<ListingDocument>) { }

    async findAll(): Promise<Listing[]> {
        return await this.model.find().exec();
    }

    async create(listing: Listing): Promise<Listing> {
        return await new this.model({
            ...listing
        }).save();
    }

    async findListingByAgentId(agent: string): Promise<Listing[]> {
        return await this.model.find({
            agent: agent
        })
    }

    async findListingByOrgId(org: string): Promise<Listing[]> {
        return await this.model.find({
            organisation: org
        })
    }
}
