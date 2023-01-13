import React from 'react';
import * as Styled from '@styles/home/TodoDetail.style';
import type { Todo } from '#types/TodoTypes';

interface TodoDetailProps {
  todo: Todo;
  handleClickEdit: () => void;
}

const TodoDetail = ({ todo, handleClickEdit }: TodoDetailProps) => {
  return (
    <>
      <Styled.Title>{todo.title}</Styled.Title>
      <Styled.Content>{todo.content}</Styled.Content>
      <Styled.EditButton onClick={handleClickEdit}>수정하기</Styled.EditButton>
    </>
  );
};

export default TodoDetail;
