import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeaDocument = HydratedDocument<Tea>;

@Schema()
export class Tea {
  @Prop()
  brand: string;

  @Prop()
  name: string;
  @Prop()
  description: string;

  @Prop()
  imageUrl: string;
}

export const TeaSchema = SchemaFactory.createForClass(Tea);
