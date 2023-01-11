import { API_HOST } from '@constants';
import type {
  ErrorResponseBody,
  GetTodoByIdResponseBody,
} from '#types/ApiResponseTypes';

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 getTodos를 호출해준다.
const apiGetTodoById = async (
  todoId: string,
  token: string,
): Promise<GetTodoByIdResponseBody | undefined> => {
  const url = new URL(API_HOST);
  url.pathname = `/todos/${todoId}`;

  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });

  const responseBody: GetTodoByIdResponseBody | ErrorResponseBody =
    await response.json();

  if (!response.ok || 'details' in responseBody)
    throw new Error(
      `Todo를 가져오던 중 문제가 발생했습니다. : ${
        'details' in responseBody ? responseBody?.details : response.status
      }`,
    );

  return responseBody;
};

export default apiGetTodoById;
