import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Listing } from '../schema/listing.schema';
import { ListingService } from './listing.service';

@Controller('listing')
export class ListingController {
    constructor(private readonly service: ListingService) { }

    @Get('/all')
    async findAll() {
        const properties = await this.service.findAll();
        return properties
    }

    @Get('/advanceSearch')
    async advanceSearch(
        @Query('area') area: string,
        @Query('listingType') listingType: string,
        @Query('options') options: []
    ) {
        console.log('optional types', { area, listingType, options })

        return await this.service.advanceSearch({ area, listingType, options })
    }

    @Get()
    async findListingByAgentId(@Res() response,
        @Query('agentId') agentId: string,
        @Query('orgId') orgId: string) {

        if (agentId) {
            return response.status(HttpStatus.OK).json(
                await this.service.findListingByAgentId(agentId)
            )
        }

        return response.status(HttpStatus.OK).json(
            await this.service.findListingByOrgId(orgId)
        )
    }

    @Post()
    async create(@Res() response, @Body() listing: Listing) {
        const stored = await this.service.create(listing)
        return response.status(HttpStatus.OK).json(stored)
    }


}
