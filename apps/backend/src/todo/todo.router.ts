import { Inject } from '@nestjs/common';
import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { TodoService } from './todo.service';
import { zCreateTodo, zTodo } from './todo.schema';
import { TodoTypesDTO } from '@repo/shared';
import z from 'zod';

@Router({ alias: 'todo' })
export class TodoRouter {
  constructor(@Inject(TodoService) private readonly todoService: TodoService) {}

  @Query({
    output: z.array(zTodo),
  })
  getTodos(): Promise<TodoTypesDTO.Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Mutation({
    input: zCreateTodo,
    output: zTodo,
  })
  createTodo(
    @Input() input: TodoTypesDTO.CreateTodo,
  ): Promise<TodoTypesDTO.Todo> {
    return this.todoService.createTodo(input);
  }
}
