import React from 'react';
import * as Styled from '../../styles/auth/AuthLayout.style';

interface AuthLayoutProps {
  children: React.ReactNode;
  isRegister: boolean;
  toggleIsRegister: () => void;
}

const AuthLayout = ({
  children,
  isRegister,
  toggleIsRegister,
}: AuthLayoutProps) => {
  return (
    <Styled.Layout>
      <Styled.Title>로그인</Styled.Title>
      {children}
      <Styled.AuthButton onClick={toggleIsRegister}>
        {isRegister ? '로그인으로 변경' : '회원가입으로 변경'}
      </Styled.AuthButton>
    </Styled.Layout>
  );
};

export default AuthLayout;
