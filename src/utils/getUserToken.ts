import { LOCALSTORAGE_TOKEN_KEY } from '@constants';

// useQuery로 뺄까하다가 localStorage로 관리하는게 cookie로 관리하는 것과 더 유사해보여서 놔둠.
const getUserToken = (): string => {
  const userToken = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  return userToken || '';
};

export default getUserToken;
