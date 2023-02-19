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


    @Get('/org')
    async findAgentByOrgId(@Res() response, @Query('organisationID') organisationID: string) {
        const results = await this.service.getAgentByOrgId(organisationID)
        return response.status(HttpStatus.OK).json(results)
    }
}
