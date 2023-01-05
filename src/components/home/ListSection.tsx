import React from 'react';
import * as Styled from '@styles/home/ListSection.style';
import type { Todo } from '#types/TodoTypes';

interface ListSectionProps {
  todos: Todo[];
}

const ListSection = ({ todos }: ListSectionProps) => {
  return (
    <Styled.Section>
      <Styled.List>
        {todos.map((todo) => (
          <Styled.ListItem key={todo.id}>{todo.title}</Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Section>
  );
};

export default ListSection;
