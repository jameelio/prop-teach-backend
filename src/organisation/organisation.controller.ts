import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { Organisation } from '../schema/organisation.schema';

@Controller('organisation')
export class OrganisationController {
    constructor(private readonly service: OrganisationService) { }

    @Get()
    async findAll() {
        const orgs = await this.service.findAll();
        return orgs
    }

    @Post()
    async create(@Res() response, @Body() org: Organisation) {
        const stored = await this.service.create(org)
        return response.status(HttpStatus.OK).json(stored)
    }
}
