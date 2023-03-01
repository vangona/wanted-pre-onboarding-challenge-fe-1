import React from 'react';
import * as Styled from '@styles/DailyscrumGroups/DailyscrumGroupsLayout.style';

interface DailyscrumGroupsLayoutProps {
  children: React.ReactNode;
}

const DailyscrumGroupsLayout = ({ children }: DailyscrumGroupsLayoutProps) => {
  return (
    <Styled.Layout>
      <Styled.Title>더따데 그룹 페이지에용</Styled.Title>
      {/* 간단한 페이지만 만들고자 Title을 레이아웃에 포함시켰음 */}
      {children}
    </Styled.Layout>
  );
};

export default DailyscrumGroupsLayout;
