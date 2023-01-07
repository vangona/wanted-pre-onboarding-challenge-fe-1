import { API_HOST } from '@constants';
import type { Todo } from '#types/TodoTypes';

interface GetTodosResponse {
  data: Todo[];
}

interface ErrorResponse {
  details: string;
}

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 getTodos를 호출해준다.
const getTodos = async (
  token: string,
): Promise<GetTodosResponse | ErrorResponse> => {
  const url = new URL(API_HOST);
  url.pathname = '/todos';

  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });

  return response.json();
};

export default getTodos;
