import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDeleteTodoMutation from '@hooks/mutations/useDeleteTodoMutation';
import * as Styled from '@styles/home/TodoListItem.style';
import type { Todo } from '#types/TodoTypes';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const [isFinish, setIsFinish] = useState(Boolean);
  const setSearchParams = useSearchParams()[1];
  const { mutate: deleteTodo } = useDeleteTodoMutation();

  const handleChangeCheckbox: React.ChangeEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    setIsFinish(target.checked);
  };

  const handleClickTodo = (todo: Todo) => {
    setSearchParams({ todo: todo.id });
  };

  return (
    <Styled.ListItem key={todo.id}>
      <Styled.TodoCheckbox
        onChange={handleChangeCheckbox}
        checked={isFinish}
        type='checkbox'
      />
      <Styled.TodoTitle
        onClick={() => handleClickTodo(todo)}
        isFinish={isFinish}
      >
        {todo.title}
      </Styled.TodoTitle>
      <Styled.DeleteButton
        onClick={() =>
          window.confirm('삭제하시겠습니까?') && deleteTodo({ todoId: todo.id })
        }
      >
        ❌
      </Styled.DeleteButton>
    </Styled.ListItem>
  );
};

export default TodoListItem;
