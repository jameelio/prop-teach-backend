import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { AgentService } from './agent.service';
import { Agent } from '../schema/agent.schema';

@Controller('agent')
export class AgentController {
    constructor(private readonly service: AgentService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Post()
    async create(@Res() response, @Body() agent: Agent) {
        const stored = await this.service.create(agent)
        return response.status(HttpStatus.OK).json(stored)
    }


    @Get('/org/agents')
    async findListingByOrgId(@Res() response, @Query('orgId') orgId: string) {
        console.log(orgId, 'orgId')
        const results = await this.service.getAgentByOrgId(orgId)
        return response.status(HttpStatus.OK).json(results)
    }
}
