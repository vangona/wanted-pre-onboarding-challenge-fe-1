import React, { useState } from 'react';
import AuthForm from '@components/auth/AuthForm';
import AuthLayout from '@components/auth/AuthLayout';
import * as Styled from '@styles/auth/Auth.style';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleIsRegister = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <AuthLayout>
      <Styled.AuthContainer isRegister={isRegister}>
        <Styled.AuthTitle>
          {isRegister ? '회원가입' : '로그인'}
        </Styled.AuthTitle>
        <AuthForm isRegister={isRegister} />
        <Styled.AuthButton onClick={toggleIsRegister}>
          {isRegister ? '🔃 로그인으로 변경' : '🔃 회원가입으로 변경'}
        </Styled.AuthButton>
      </Styled.AuthContainer>
    </AuthLayout>
  );
};

export default Auth;
