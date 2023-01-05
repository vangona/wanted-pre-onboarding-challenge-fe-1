import React from 'react';
import * as Styled from '@styles/auth/AuthLayout.style';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default AuthLayout;
