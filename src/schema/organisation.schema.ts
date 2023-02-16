import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Organisation {
    @Prop()
    name: string

    @Prop()
    logoUrl: string

    @Prop()
    email: string

    @Prop()
    address: string

    @Prop()
    description: string
}

export const OrganisationSchema = SchemaFactory.createForClass(Organisation);