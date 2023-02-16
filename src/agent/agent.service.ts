import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Agent, AgentDocument } from 'src/schema/agent.schema';

@Injectable()
export class AgentService {
    constructor(@InjectModel(Agent.name) private readonly model: Model<AgentDocument>) { }

    async findAll(): Promise<Agent[]> {
        return await this.model.find().exec();
    }

    async create(agent: Agent): Promise<Agent> {
        return await new this.model({
            ...agent,
            createdAt: new Date(),
        }).save();
    }

    async getAgentByOrgId(orgId: string): Promise<Agent[]> {
        return []
    }

}
