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

  async createTodo(input: TodoTypesDTO.CreateTodo): Promise<TodoTypesDTO.Todo> {
    const todoTocreate = {
      title: input.title,
      description: 'test',
      priority: 'medium',
      status: input.status || 'Not_Started',
    };
    const result = await this.todoModel.create(todoTocreate);
    const finalData = {
      id: `${result._id as string}`,
      title: result.title,
      description: result.description,
      priority: result.priority,
      status: result.status,
    };
    return finalData;
  }

  async updateTodo(input: TodoTypesDTO.UpdateTodo): Promise<TodoTypesDTO.Todo> {
    const olddata = await this.todoModel.findById(input.id);
    const todoToUpdate = {
      title: input.title || olddata?.title,
      description: input.description || olddata?.description,
      priority: input.priority || olddata?.priority,
      status: input.status || olddata?.status,
    };
    const result = await this.todoModel.findByIdAndUpdate(
      input.id,
      todoToUpdate,
      { new: true },
    );
    if (!result) {
      throw new Error(`unable to fetch Data`);
    }
    const finalData = {
      id: `${result._id as string}`,
      title: result.title,
      description: result.description,
      priority: result.priority,
      status: result.status,
    };
    return finalData;
  }
  async deleteTodo(input: TodoTypesDTO.DeleteTodo): Promise<string> {
    if (!input.id) {
      const result = await this.todoModel.findOneAndDelete(input.title);
      if (!result) {
        return `deleteing todo unsuccessfull`;
      }
      return `Todo with title: ${input.id} deleted successfully`;
    }
    const result = await this.todoModel.findByIdAndDelete(input.id);
    if (!result) {
      return `deleteing todo unsuccessfull`;
    }
    return `Todo with title: ${input.id as string} deleted successfully`;
  }
}
