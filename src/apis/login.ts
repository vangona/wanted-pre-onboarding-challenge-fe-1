import { API_HOST, METHOD } from '@constants';

interface LoginResponse {
  message: string;
  token: string;
}

interface ErrorResponse {
  details: string;
}

const login = async (
  email: string,
  password: string,
): Promise<LoginResponse | ErrorResponse> => {
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
