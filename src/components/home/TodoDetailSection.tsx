import React, { useState } from 'react';
import TodoDetail from '@components/home/TodoDetailItem';
import TodoEditForm from '@components/home/TodoEditForm';
import * as Styled from '@styles/home/TodoDetailSection.style';
import { Todo } from '#types/TodoTypes';

interface TodoDetailSectionProps {
  todo: Todo;
  handleEditTodoEffect: (edittedTodo: Todo) => void;
}

const TodoDetailSection = ({
  todo,
  handleEditTodoEffect,
}: TodoDetailSectionProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  return (
    <Styled.Section>
      {isEditMode ? (
        <TodoEditForm
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

export default TodoDetailSection;
