import React from 'react';
import { Todo } from '#types/TodoTypes';

interface DetailSectionProps {
  todo: Todo;
}

const DetailSection = ({ todo }: DetailSectionProps) => {
  return <div>{todo.title}</div>;
};

export default DetailSection;
