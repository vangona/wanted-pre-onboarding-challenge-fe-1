import React from 'react';
import * as Styled from '@styles/home/TodoListItem.style';
import type { Todo } from '#types/TodoTypes';

interface TodoListItemProps {
  todo: Todo;
  handleClickTodo: (newTodo: Todo) => void;
  handleClickDeleteTodo: (id: string) => void;
}

const TodoListItem = ({
  todo,
  handleClickTodo,
  handleClickDeleteTodo,
}: TodoListItemProps) => {
  return (
    <Styled.ListItem key={todo.id}>
      <Styled.TodoTitle onClick={() => handleClickTodo(todo)}>
        {todo.title}
      </Styled.TodoTitle>
      <Styled.DeleteButton
        onClick={() =>
          window.confirm('삭제하시겠습니까?') && handleClickDeleteTodo(todo.id)
        }
      >
        삭제하기
      </Styled.DeleteButton>
    </Styled.ListItem>
  );
};

export default TodoListItem;
