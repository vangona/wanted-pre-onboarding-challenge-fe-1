import { API_HOST } from '@constants';
import type {
  GetTodosResponseBody,
  ErrorResponseBody,
} from '#types/ApiResponseTypes';

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 getTodos를 호출해준다.
const apiGetTodos = async (
  token: string,
): Promise<GetTodosResponseBody | undefined> => {
  const url = new URL(API_HOST);
  url.pathname = '/todos';

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });

    const body: GetTodosResponseBody | ErrorResponseBody =
      await response.json();

    if (!response.ok || 'details' in body)
      throw new Error(
        `Error : ${'details' in body ? body?.details : response.status}`,
      );

    return body;
  } catch (e) {
    alert(e);
  }
};

export default apiGetTodos;
