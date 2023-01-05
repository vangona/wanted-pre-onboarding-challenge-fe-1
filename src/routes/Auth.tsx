import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@components/auth/AuthForm';
import AuthLayout from '@components/auth/AuthLayout';
import * as Styled from '@styles/auth/Auth.style';
import checkIsValidToken from '@utils/checkIsValidToken';

interface AuthProps {
  userToken: string;
}

const Auth = ({ userToken }: AuthProps) => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);

  const toggleIsRegister = () => {
    setIsRegister((prev) => !prev);
  };

  useEffect(() => {
    if (checkIsValidToken(userToken)) {
      navigate('/');
      return;
    }
  }, [userToken, navigate]);

  return (
    <AuthLayout>
      <Styled.Title>{isRegister ? '회원가입' : '로그인'}</Styled.Title>
      <AuthForm isRegister={isRegister} />
      <Styled.AuthButton onClick={toggleIsRegister}>
        {isRegister ? '로그인으로 변경' : '회원가입으로 변경'}
      </Styled.AuthButton>
    </AuthLayout>
  );
};

export default Auth;
