import React from 'react';
import * as Styled from '@styles/home/HomeLayout.style';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default HomeLayout;
