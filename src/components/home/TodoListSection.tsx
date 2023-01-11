import React, { Suspense } from 'react';
import TodoListItem from '@components/home/TodoListItem';
import useGetTodosQuery from '@hooks/queries/useGetTodosQuery';
import * as Styled from '@styles/home/TodoListSection.style';

interface TodoListSectionProps {
  openModal: () => void;
}

const TodoListSection = ({ openModal }: TodoListSectionProps) => {
  const { data: todos } = useGetTodosQuery();

  return (
    <Styled.Section>
      <Suspense fallback={'로딩중'}>
        {todos && (
          <Styled.List>
            {todos.data.map((todo) => (
              <TodoListItem key={todo.id} todo={todo} />
            ))}
            <Styled.AddButton onClick={openModal}>추가하기</Styled.AddButton>
          </Styled.List>
        )}
      </Suspense>
    </Styled.Section>
  );
};

export default TodoListSection;
