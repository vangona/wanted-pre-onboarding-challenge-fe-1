import React from 'react';
import * as Styled from '@styles/DailyscrumGroups/DailyscrumGroupsContainer.style';

interface DailyscrumGroupsContainerProps {
  children: React.ReactNode;
}

const DailyscrumGroupsContainer = ({
  children,
}: DailyscrumGroupsContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default DailyscrumGroupsContainer;
