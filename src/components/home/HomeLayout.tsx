import React from 'react';
import * as Styled from '@styles/home/HomeLayout.style';
import { BG_IMG_COUNT } from '@constants';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const getRandBgSrc = () => {
    const randNum = Math.floor(Math.random() * BG_IMG_COUNT) + 1;
    return `https://cdn.jsdelivr.net/gh/vangona/wanted-pre-onboarding-challenge-fe-1@main/src/assets/img/bg${randNum}.jpg`;
  };

  return <Styled.Layout randBgSrc={getRandBgSrc()}>{children}</Styled.Layout>;
};

export default HomeLayout;
