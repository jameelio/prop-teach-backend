import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose';

export type AgentDocument = Agent & Document;

@Schema()
export class Agent {
    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    email: string

    @Prop()
    contactNumber: string

    @Prop()
    profileImageUrl: string
}

export const AgentSchema = SchemaFactory.createForClass(Agent);