import React, { useState } from 'react';
import * as Styled from '@styles/home/DetailSection.style';
import EditForm from './EditForm';
import TodoDetail from './TodoDetail';
import { Todo } from '#types/TodoTypes';

interface DetailSectionProps {
  todo: Todo;
  handleEditTodoEffect: (edittedTodo: Todo) => void;
}

const DetailSection = ({ todo, handleEditTodoEffect }: DetailSectionProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  return (
    <Styled.Section>
      {isEditMode ? (
        <EditForm
          todo={todo}
          handleEditTodoEffect={handleEditTodoEffect}
          closeEditMode={() => setIsEditMode(false)}
        />
      ) : (
        <TodoDetail todo={todo} handleClickEdit={() => setIsEditMode(true)} />
      )}
    </Styled.Section>
  );
};

export default DetailSection;
