import React, { useState } from 'react';
import * as Styled from '@styles/home/DetailSection.style';
import { Todo } from '#types/TodoTypes';
import EditForm from './EditForm';
import TodoDetail from './TodoDetail';

interface DetailSectionProps {
  todo: Todo;
}

const DetailSection = ({ todo }: DetailSectionProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleFormEffect = () => {
    setIsEditMode(false);
  };

  return (
    <Styled.Section>
      {isEditMode ? (
        <EditForm todo={todo} handleFormEffect={handleFormEffect} />
      ) : (
        <TodoDetail todo={todo} handleClickEdit={() => setIsEditMode(true)} />
      )}
    </Styled.Section>
  );
};

export default DetailSection;
