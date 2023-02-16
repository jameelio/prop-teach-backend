import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Schema as MongooseSchema } from 'mongoose';
import { Agent } from "./agent.schema";
import { Organisation } from "./organisation.schema"
import { UnitSchema, Unit } from "./unit.schema";

export type ListingDocument = Listing & Document;

@Schema()
export class Listing {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: Agent.name })
    agent: Agent

    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    status: string

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: Organisation.name })
    organisation: Organisation;

    @Prop()
    listingType: string //enum

    @Prop()
    listingSector: string //enum

    @Prop({ type: UnitSchema })
    unit: Unit

    @Prop([String])
    images: string[];

}

export const ListingSchema = SchemaFactory.createForClass(Listing);