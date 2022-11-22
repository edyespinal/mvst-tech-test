import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoffeeDocument = HydratedDocument<Coffee>;

@Schema()
export class Coffee {
  @Prop()
  brand: string;

  @Prop()
  name: string;
  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop()
  type: string;
}

export const CoffeeSchema = SchemaFactory.createForClass(Coffee);
