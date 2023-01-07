import { API_HOST, METHOD } from '@constants';
import type { Todo } from '#types/TodoTypes';

interface UpdateTodoResponse {
  data: Todo;
}

interface ErrorResponse {
  details: string;
}

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 호출해준다.
const updateTodo = async (
  id: string,
  title: string,
  content: string,
  token: string,
): Promise<UpdateTodoResponse | ErrorResponse> => {
  const url = new URL(API_HOST);
  url.pathname = `/todos/${id}`;

  const response = await fetch(url, {
    method: METHOD.PUT,
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

export default updateTodo;
