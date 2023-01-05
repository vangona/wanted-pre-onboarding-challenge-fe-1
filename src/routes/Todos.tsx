import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import checkIsValidToken from '@utils/checkIsValidToken';

interface TodosProps {
  userToken: string;
}

const Todos = ({ userToken }: TodosProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkIsValidToken(userToken)) {
      navigate('/auth');
    }
  }, [userToken, navigate]);

  return <div>Todos, {userToken}</div>;
};

export default Todos;
