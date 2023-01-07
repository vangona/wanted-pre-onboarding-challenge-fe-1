import React from 'react';
import * as Styled from '@styles/home/DetailSection.style';
import { Todo } from '#types/TodoTypes';

interface DetailSectionProps {
  todo: Todo;
}

const DetailSection = ({ todo }: DetailSectionProps) => {
  return (
    <Styled.Section>
      <Styled.Title>{todo.title}</Styled.Title>
      <Styled.Content>{todo.content}</Styled.Content>
    </Styled.Section>
  );
};

export default DetailSection;
