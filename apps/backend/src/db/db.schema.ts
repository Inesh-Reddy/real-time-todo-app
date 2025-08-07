import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { StatusEnum } from '@repo/shared';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  priority: string;
  @Prop({
    type: Object.values(StatusEnum as any as Record<string, string>),
    required: true,
  })
  status: StatusEnum;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

@Schema()
export class User extends Document {
  @Prop()
  email: string;
  @Prop()
  name: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Todo',
  })
  todos: Todo[];
}

export const UserSchema = SchemaFactory.createForClass(User);
