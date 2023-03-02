import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import apiGetGroups from '@apis/apiGetGroups';
import DailyscrumGroupsColumn from '@components/dailyscrum-groups/DailyscrumGroupsColumn';
import DailyscrumGroupsContainer from '@components/dailyscrum-groups/DailyscrumGroupsContainer';
import DailyscrumGroupsLayout from '@components/dailyscrum-groups/DailyscrumGroupsLayout';

const DailyscrumGroups = () => {
  const [queryYear, setQueryYear] = useState<string | null>(null);
  const [queryMonth, setQueryMonth] = useState<string | null>(null);
  const [queryWeek, setQueryWeek] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const [datetime, setDatetime] = useState<string | undefined>('');
  const [groups, setGroups] = useState<Record<string, string[]> | undefined>(
    {},
  );

  useEffect(() => {
    if (!searchParams) return;

    if (searchParams.has('year')) setQueryYear(searchParams.get('year'));
    if (searchParams.has('month')) setQueryMonth(searchParams.get('month'));
    if (searchParams.has('week')) setQueryWeek(searchParams.get('week'));
  }, [searchParams]);

  useEffect(() => {
    apiGetGroups(queryYear, queryMonth, queryWeek).then((snapshot) => {
      setGroups(snapshot?.data.groups);
      setDatetime(snapshot?.data.datetime);
    });
  }, [queryYear, queryMonth, queryWeek]);

  return (
    <DailyscrumGroupsLayout
      title={`더 따뜻한 데일리스크럼 ${datetime}주차 그룹`}
    >
      <DailyscrumGroupsContainer>
        <DailyscrumGroupsColumn groupName='A' members={groups?.A} />
        <DailyscrumGroupsColumn groupName='B' members={groups?.B} />
        <DailyscrumGroupsColumn groupName='C' members={groups?.C} />
      </DailyscrumGroupsContainer>
    </DailyscrumGroupsLayout>
  );
};

export default DailyscrumGroups;
