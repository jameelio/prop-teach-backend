import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ListingSchema, Listing } from '../schema/listing.schema';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';

@Module({
    providers: [ListingService],
    controllers: [ListingController],
    imports: [MongooseModule.forFeature([{
        name: Listing.name,
        schema: ListingSchema
    }])]
})
export class ListingModule { }
