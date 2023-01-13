import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TodoDetail from '@components/home/TodoDetail';
import TodoEditForm from '@components/home/TodoEditForm';
import useGetTodoByIdQuery from '@hooks/queries/useGetTodoByIdQuery';
import * as Styled from '@styles/home/TodoNote.style';

const TodoNote = () => {
  const [searchParams] = useSearchParams();
  const todoId = searchParams.get('todo');
  const { data: todoResponseBody } = useGetTodoByIdQuery(todoId || ''); // useQuery에서 enabled로 처리해줌.
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  if (!todoResponseBody) return <></>;

  return (
    <Styled.Layout>
      {isEditMode ? (
        <TodoEditForm
          todo={todoResponseBody.data}
          closeEditMode={() => setIsEditMode(false)}
        />
      ) : (
        <TodoDetail
          todo={todoResponseBody.data}
          handleClickEdit={() => setIsEditMode(true)}
        />
      )}
    </Styled.Layout>
  );
};

export default TodoNote;
