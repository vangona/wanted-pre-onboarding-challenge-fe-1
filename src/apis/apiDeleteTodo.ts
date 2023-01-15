import { API_HOST, METHOD } from '@constants';
import type { DeleteTodoResponseBody } from '#types/ApiResponseTypes';

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 호출해준다.
const apiDeleteTodo = async (
  id: string,
  token: string,
): Promise<DeleteTodoResponseBody | undefined> => {
  const url = new URL(`${API_HOST}/todos/${id}`);

  const response = await fetch(url, {
    method: METHOD.DELETE,
    headers: {
      Authorization: token,
    },
  });

  const responseBody = await response.json();

  if (!response.ok || 'details' in responseBody)
    throw new Error(
      `삭제 중 문제가 발생했습니다. : ${
        'details' in responseBody ? responseBody?.details : response.status
      }`,
    );

  return responseBody;
};

export default apiDeleteTodo;
