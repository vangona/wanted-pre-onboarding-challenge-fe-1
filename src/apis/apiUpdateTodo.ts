import { API_HOST, METHOD } from '@constants';
import type {
  UpdateTodoResponseBody,
  ErrorResponseBody,
} from '#types/ApiResponseTypes';

// token이 localStorage에 담겨있어서 null일 수 있기 때문에 외부에서 유효성을 체크해서 호출해준다.
const apiUpdateTodo = async (
  id: string,
  title: string,
  content: string,
  token: string,
): Promise<UpdateTodoResponseBody | undefined> => {
  const url = new URL(`${API_HOST}/todos/${id}`);

  try {
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

    const responseBody: UpdateTodoResponseBody | ErrorResponseBody =
      await response.json();

    if (!response.ok || 'details' in responseBody)
      throw new Error(
        `Error : ${
          'details' in responseBody ? responseBody?.details : response.status
        }`,
      );

    return responseBody;
  } catch (e) {
    alert(e);
  }
};

export default apiUpdateTodo;
