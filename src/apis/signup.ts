import { API_HOST, METHOD } from '@constants';

interface SignupResponse {
  message: string;
  token: string;
}

interface ErrorResponse {
  details: string;
}

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
