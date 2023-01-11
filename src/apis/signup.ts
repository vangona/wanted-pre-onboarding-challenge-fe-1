import { API_HOST, METHOD } from '@constants';
import type { SignupResponse, ErrorResponse } from '#types/ApiResponseTypes';

const signup = async (
  email: string,
  password: string,
): Promise<SignupResponse | ErrorResponse> => {
  const url = new URL(API_HOST);
  url.pathname = 'users/create';

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

  if (response.status < 300 && response.status >= 200) {
    return response.json();
  }

  return response.json();
};

export default signup;
