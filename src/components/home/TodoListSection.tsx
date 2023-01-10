import React from 'react';
import deleteTodo from '@apis/deleteTodo';
import TodoListItem from '@components/home/TodoListItem';
import useToken from '@hooks/useToken';
import * as Styled from '@styles/home/TodoListSection.style';
import type { Todo } from '#types/TodoTypes';

interface TodoListSectionProps {
  todos: Todo[];
  handleClickTodo: (newTodo: Todo) => void;
  openModal: () => void;
  handleDeleteTodoEffect: (id: string) => void;
}

const TodoListSection = ({
  todos,
  handleClickTodo,
  openModal,
  handleDeleteTodoEffect,
}: TodoListSectionProps) => {
  const token = useToken();
  const handleClickDeleteTodo = async (id: string) => {
    const response = await deleteTodo(id, token);

    if ('details' in response) {
      alert(`삭제 중 문제가 발생했습니다. ${response.details}`);
    } else {
      alert('삭제되었습니다!');
      handleDeleteTodoEffect(id);
    }
  };

  return (
    <Styled.Section>
      <Styled.List>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            handleClickTodo={handleClickTodo}
            handleClickDeleteTodo={handleClickDeleteTodo}
          />
        ))}
        <Styled.AddButton onClick={openModal}>추가하기</Styled.AddButton>
      </Styled.List>
    </Styled.Section>
  );
};

export default TodoListSection;
