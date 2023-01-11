import type { Todo } from '#types/TodoTypes';

export interface SignupResponse {
  message: string;
  token: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}

export interface CreateTodoResponse {
  data: Todo;
}

export interface GetTodosResponse {
  data: Todo[];
}

export interface UpdateTodoResponse {
  data: Todo;
}

export interface DeleteTodoResponse {
  data: null;
}

export interface ErrorResponse {
  details: string;
}
