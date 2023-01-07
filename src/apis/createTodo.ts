import { API_HOST, METHOD } from '@constants';
import type { Todo } from '#types/TodoTypes';

interface CreateTodoResponse {
  data: Todo;
}

interface ErrorResponse {
  details: string;
}

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 호출해준다.
const createTodo = async (
  title: string,
  content: string,
  token: string,
): Promise<CreateTodoResponse | ErrorResponse> => {
  const url = new URL(API_HOST);
  url.pathname = '/todos';

  const response = await fetch(url, {
    method: METHOD.POST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });

  return response.json();
};

export default createTodo;