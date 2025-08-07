import { StatusEnum } from "../enums/status.enums";

type FullTodoDTO = {
  id?: String;
  title: String;
  description: String;
  priority: String;
  status: StatusEnum;
};

type CreateTodoDTO = {
  title: String;
  status?: StatusEnum;
};

type UpdateTodoDTO = {
  id: String;
  title?: String;
  description?: String;
  priority?: String;
  status?: StatusEnum;
};

type DeleteTodoDTO = {
  id?: String;
  title?: String;
};

export namespace TodoTypesDTO {
  export type Todo = FullTodoDTO;
  export type CreateTodo = CreateTodoDTO;
  export type DeleteTodo = DeleteTodoDTO;
  export type UpdateTodo = UpdateTodoDTO;
}

export default TodoTypesDTO;
