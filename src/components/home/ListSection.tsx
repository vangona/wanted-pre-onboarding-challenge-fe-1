import React from 'react';
import * as Styled from '@styles/home/ListSection.style';
import type { Todo } from '#types/TodoTypes';

interface ListSectionProps {
  todos: Todo[];
  handleClickTodo: (newTodo: Todo) => void;
  openModal: () => void;
}

const ListSection = ({
  todos,
  handleClickTodo,
  openModal,
}: ListSectionProps) => {
  const handleClickDeleteTodo = (todo: Todo) => {
    console.log(todo.id);
  };

  return (
    <Styled.Section>
      <Styled.List>
        {todos.map((todo) => (
          <Styled.ListItem key={todo.id}>
            <Styled.TodoTitle onClick={() => handleClickTodo(todo)}>
              {todo.title}
            </Styled.TodoTitle>
            <Styled.DeleteButton onClick={() => handleClickDeleteTodo(todo)}>
              삭제하기
            </Styled.DeleteButton>
          </Styled.ListItem>
        ))}
        <Styled.AddButton onClick={openModal}>추가하기</Styled.AddButton>
      </Styled.List>
    </Styled.Section>
  );
};

export default ListSection;
