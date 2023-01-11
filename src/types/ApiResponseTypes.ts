import type { Todo } from '#types/TodoTypes';

export interface SignupResponseBody {
  message: string;
  token: string;
}

export interface LoginResponseBody {
  message: string;
  token: string;
}

export interface CreateTodoResponseBody {
  data: Todo;
}

export interface GetTodosResponseBody {
  data: Todo[];
}

export interface UpdateTodoResponseBody {
  data: Todo;
}

export interface DeleteTodoResponseBody {
  data: null;
}

export interface ErrorResponseBody {
  details: string;
}
