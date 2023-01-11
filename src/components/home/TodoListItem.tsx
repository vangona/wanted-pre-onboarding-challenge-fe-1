import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useDeleteTodoMutation from '@hooks/mutations/useDeleteTodoMutation';
import * as Styled from '@styles/home/TodoListItem.style';
import type { Todo } from '#types/TodoTypes';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const setSearchParams = useSearchParams()[1];
  const { mutate: deleteTodo } = useDeleteTodoMutation();

  const handleClickTodo = (todo: Todo) => {
    setSearchParams({ todo: todo.id });
  };

  return (
    <Styled.ListItem key={todo.id}>
      <Styled.TodoTitle onClick={() => handleClickTodo(todo)}>
        {todo.title}
      </Styled.TodoTitle>
      <Styled.DeleteButton
        onClick={() =>
          window.confirm('삭제하시겠습니까?') && deleteTodo({ todoId: todo.id })
        }
      >
        삭제하기
      </Styled.DeleteButton>
    </Styled.ListItem>
  );
};

export default TodoListItem;
