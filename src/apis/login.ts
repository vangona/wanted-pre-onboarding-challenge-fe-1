import { API_HOST, METHOD } from '@constants';
import type {
  LoginResponseBody,
  ErrorResponseBody,
} from '#types/ApiResponseTypes';

const login = async (
  email: string,
  password: string,
): Promise<LoginResponseBody | ErrorResponseBody> => {
  const url = new URL(API_HOST);
  url.pathname = 'users/login';

  const response = await fetch(url, {
    method: METHOD.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return response.json();
};

export default login;
