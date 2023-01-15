import { API_HOST } from '@constants';
import type {
  GetTodosResponseBody,
  ErrorResponseBody,
} from '#types/ApiResponseTypes';

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 getTodos를 호출해준다.
const apiGetTodos = async (
  token: string,
): Promise<GetTodosResponseBody | undefined> => {
  const url = new URL(`${API_HOST}/todos`);

  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });

  const responseBody: GetTodosResponseBody | ErrorResponseBody =
    await response.json();

  if (!response.ok || 'details' in responseBody)
    throw new Error(
      `Todo 목록을 가져오던 중 문제가 발생했습니다. : ${
        'details' in responseBody ? responseBody?.details : response.status
      }`,
    );

  return responseBody;
};

export default apiGetTodos;
