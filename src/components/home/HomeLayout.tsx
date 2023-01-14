import React, { useMemo, useState } from 'react';
import * as Styled from '@styles/home/HomeLayout.style';
import { BG_IMG_COUNT } from '@constants';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const [changeBg, setChangeBg] = useState<boolean>(false);
  const handleChangeBg = () => {
    setChangeBg((prev) => !prev);
  };

  const getRandBgSrc = useMemo(() => {
    const randNum = Math.floor(Math.random() * BG_IMG_COUNT) + 1;
    return `https://cdn.jsdelivr.net/gh/vangona/wanted-pre-onboarding-challenge-fe-1@main/src/assets/img/bg${randNum}.jpg`;
  }, [changeBg]); // useMemo로 저장된 이미지를 changeBg를 토글하여 쉽게 변경함.

  return (
    <Styled.Layout randBgSrc={getRandBgSrc}>
      {children}
      <Styled.ChangeBgButton onClick={handleChangeBg}>
        🔄️
      </Styled.ChangeBgButton>
    </Styled.Layout>
  );
};

export default HomeLayout;
