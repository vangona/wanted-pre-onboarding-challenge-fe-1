import { useState, useEffect } from 'react';
import { LOCALSTORAGE_TOKEN_KEY } from '@constants';

const useToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    localToken && setToken(localToken);
  }, []);

  return token;
};

export default useToken;
