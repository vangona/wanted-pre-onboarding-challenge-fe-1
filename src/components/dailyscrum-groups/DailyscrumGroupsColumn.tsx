import React from 'react';
import * as Styled from '@styles/DailyscrumGroups/DailyscrumGroupsColumn.style';

interface DailyscrumGroupsColumnProps {
  groupName: string;
  members: string[];
}

const DailyscrumGroupsColumn = ({
  groupName,
  members,
}: DailyscrumGroupsColumnProps) => {
  return (
    <Styled.Column>
      <Styled.GroupName>{groupName}</Styled.GroupName>
      <Styled.MemberList>
        {members.map((memberName, index) => (
          <Styled.MemberName key={`${index}-${memberName}`}>
            {memberName}
          </Styled.MemberName>
        ))}
      </Styled.MemberList>
    </Styled.Column>
  );
};

export default DailyscrumGroupsColumn;
