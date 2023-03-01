import DailyscrumGroupsColumn from '@components/dailyscrum-groups/DailyscrumGroupsColumn';
import DailyscrumGroupsContainer from '@components/dailyscrum-groups/DailyscrumGroupsContainer';
import DailyscrumGroupsLayout from '@components/dailyscrum-groups/DailyscrumGroupsLayout';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const DailyscrumGroups = () => {
  const [queryYear, setQueryYear] = useState<string | null>(null);
  const [queryMonth, setQueryMonth] = useState<string | null>(null);
  const [queryWeek, setQueryWeek] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    if (searchParams.has('year')) setQueryYear(searchParams.get('year'));
    if (searchParams.has('month')) setQueryMonth(searchParams.get('month'));
    if (searchParams.has('week')) setQueryWeek(searchParams.get('week'));
  }, [searchParams]);
  return (
    <DailyscrumGroupsLayout>
      <DailyscrumGroupsContainer>
        <DailyscrumGroupsColumn
          groupName='A'
          members={['김관경', '백도훈', '김세영', '최용석']}
        />
        <DailyscrumGroupsColumn
          groupName='B'
          members={['김관경', '백도훈', '김세영', '최용석']}
        />
        <DailyscrumGroupsColumn
          groupName='C'
          members={['김관경', '백도훈', '김세영', '최용석']}
        />
      </DailyscrumGroupsContainer>
    </DailyscrumGroupsLayout>
  );
};

export default DailyscrumGroups;
