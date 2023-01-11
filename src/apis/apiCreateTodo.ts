import { API_HOST, METHOD } from '@constants';
import type {
  CreateTodoResponseBody,
  ErrorResponseBody,
} from '#types/ApiResponseTypes';

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 호출해준다.
const apiCreateTodo = async (
  title: string,
  content: string,
  token: string,
): Promise<CreateTodoResponseBody | ErrorResponseBody> => {
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

export default apiCreateTodo;