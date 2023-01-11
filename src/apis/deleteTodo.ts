import { API_HOST, METHOD } from '@constants';
import type {
  DeleteTodoResponseBody,
  ErrorResponseBody,
} from '#types/ApiResponseTypes';

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 호출해준다.
const deleteTodo = async (
  id: string,
  token: string,
): Promise<DeleteTodoResponseBody | ErrorResponseBody> => {
  const url = new URL(API_HOST);
  url.pathname = `/todos/${id}`;

  const response = await fetch(url, {
    method: METHOD.DELETE,
    headers: {
      Authorization: token,
    },
  });

  return response.json();
};

export default deleteTodo;
