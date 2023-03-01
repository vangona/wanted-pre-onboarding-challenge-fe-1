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
      더따데 그룹 페이지에용 {queryYear} {queryMonth} {queryWeek}
    </DailyscrumGroupsLayout>
  );
};

export default DailyscrumGroups;
