import React from 'react';
import * as Styled from '@styles/home/TodoDetailItem.style';
import type { Todo } from '#types/TodoTypes';

interface TodoDetailItemProps {
  todo: Todo;
  handleClickEdit: () => void;
}

const TodoDetailItem = ({ todo, handleClickEdit }: TodoDetailItemProps) => {
  return (
    <>
      <Styled.Title>{todo.title}</Styled.Title>
      <Styled.Content>{todo.content}</Styled.Content>
      <Styled.EditButton onClick={handleClickEdit}>수정하기</Styled.EditButton>
    </>
  );
};

export default TodoDetailItem;
