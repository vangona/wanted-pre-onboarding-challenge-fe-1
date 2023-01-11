import React from 'react';
import useDeleteTodoMutation from '@hooks/mutations/useDeleteTodoMutation';
import * as Styled from '@styles/home/TodoListItem.style';
import type { Todo } from '#types/TodoTypes';

interface TodoListItemProps {
  todo: Todo;
  handleClickTodo: (newTodo: Todo) => void;
}

const TodoListItem = ({ todo, handleClickTodo }: TodoListItemProps) => {
  const { mutate: deleteTodo } = useDeleteTodoMutation();

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
