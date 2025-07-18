import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({ timestamps: true })
export class Idea extends Document {
  @Prop({ type: String, required: true })
  idea!: string;

  @Prop({ type: [String], default: [] })
  sections!: string[];
}

export const IdeaSchema = SchemaFactory.createForClass(Idea);
