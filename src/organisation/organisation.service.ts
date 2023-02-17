import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organisation, OrganisationDocument } from '../schema/organisation.schema';

@Injectable()
export class OrganisationService {
    constructor(@InjectModel(Organisation.name) private readonly model: Model<OrganisationDocument>) { }

    async findAll(): Promise<Organisation[]> {
        return await this.model.find().exec();
    }

    async create(org: Organisation): Promise<Organisation> {
        return await new this.model({
            ...org
        }).save();
    }
}
