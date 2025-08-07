import { Inject } from '@nestjs/common';
import { Query, Router } from 'nestjs-trpc';
import { TodoService } from './todo.service';
import { zTodo } from './todo.schema';
import { TodoTypesDTO } from '@repo/shared';

@Router({ alias: 'todo' })
export class TodoRouter {
  constructor(@Inject(TodoService) private readonly todoService: TodoService) {}

  @Query({
    output: zTodo,
  })
  async getTodos(): Promise<TodoTypesDTO.Todo[]> {
    console.log(`Reached Router`);
    const data = await this.todoService.getAllTodos();
    console.log(data);
    return data;
  }
}
