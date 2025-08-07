import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TodoTypesDTO } from '@repo/shared';
import { Model } from 'mongoose';
import { Todo } from 'src/db/db.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async getAllTodos(): Promise<TodoTypesDTO.Todo[]> {
    console.log(`Reached service`);
    try {
      const result = await this.todoModel.find();
      const finalData = result.map((todo) => ({
        id: `${todo._id as string}`,
        title: todo.title,
        description: todo.description,
        priority: todo.priority,
        status: todo.status,
      }));
      return finalData;
    } catch (error) {
      throw new Error(`error:${error}`);
    }
  }
}
