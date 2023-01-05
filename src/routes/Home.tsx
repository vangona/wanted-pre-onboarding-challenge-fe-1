import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import checkIsValidToken from '@utils/checkIsValidToken';

interface HomeProps {
  userToken: string;
}

const Home = ({ userToken }: HomeProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkIsValidToken(userToken)) {
      navigate('/auth');
    }
  }, [userToken, navigate]);

  return <div>Home, {userToken}</div>;
};

export default Home;
