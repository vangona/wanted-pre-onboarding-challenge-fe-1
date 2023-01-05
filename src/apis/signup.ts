import { API_HOST } from '@constants';

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

  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (result.status < 300 && result.status >= 200) {
    return result.json();
  }

  return result.json();
};

export default signup;
