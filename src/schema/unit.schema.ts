import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from "mongoose"

@Schema()
export class Unit {
    @Prop()
    bedrooms: Number;

    @Prop()
    bathrooms: Number;

    @Prop()
    parking: Number;

    @Prop()
    price: Number;
}

export const UnitSchema = SchemaFactory.createForClass(Unit);