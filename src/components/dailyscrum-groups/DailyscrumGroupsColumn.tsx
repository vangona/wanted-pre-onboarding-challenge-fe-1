import React from 'react';
import * as Styled from '@styles/DailyscrumGroups/DailyscrumGroupsColumn.style';

interface DailyscrumGroupsColumnProps {
  groupName: string;
  members: string[] | undefined;
}

const DailyscrumGroupsColumn = ({
  groupName,
  members,
}: DailyscrumGroupsColumnProps) => {
  if (members === undefined) return <></>;
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
