import React from 'react';
import * as Styled from '@styles/DailyscrumGroups/DailyscrumGroupsLayout.style';

interface DailyscrumLayoutProps {
  children: React.ReactNode;
}

const DailyscrumGroupsLayout = ({ children }: DailyscrumLayoutProps) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default DailyscrumGroupsLayout;
