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
  return (
    <Styled.Section>
      <Styled.List>
        {todos.map((todo) => (
          <Styled.ListItem onClick={() => handleClickTodo(todo)} key={todo.id}>
            {todo.title}
          </Styled.ListItem>
        ))}
        <Styled.AddButton onClick={openModal}>추가하기</Styled.AddButton>
      </Styled.List>
    </Styled.Section>
  );
};

export default ListSection;
