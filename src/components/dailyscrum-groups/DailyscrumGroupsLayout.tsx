import React from 'react';
import * as Styled from '@styles/DailyscrumGroups/DailyscrumGroupsLayout.style';

interface DailyscrumGroupsLayoutProps {
  title: string;
  children: React.ReactNode;
}

const DailyscrumGroupsLayout = ({
  title,
  children,
}: DailyscrumGroupsLayoutProps) => {
  return (
    <Styled.Layout>
      <Styled.Title>{title}</Styled.Title>
      {/* 간단한 페이지만 만들고자 Title을 레이아웃에 포함시켰음 */}
      {children}
    </Styled.Layout>
  );
};

export default DailyscrumGroupsLayout;
