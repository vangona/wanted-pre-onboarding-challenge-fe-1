import React, { Suspense } from 'react';
import TodoListItem from '@components/home/TodoListItem';
import useGetTodosQuery from '@hooks/queries/useGetTodosQuery';
import * as Styled from '@styles/home/TodoListSection.style';
import type { Todo } from '#types/TodoTypes';

interface TodoListSectionProps {
  handleClickTodo: (newTodo: Todo) => void;
  openModal: () => void;
  handleDeleteTodoEffect: (id: string) => void;
}

const TodoListSection = ({
  handleClickTodo,
  openModal,
}: TodoListSectionProps) => {
  const { data: todos } = useGetTodosQuery();

  return (
    <Styled.Section>
      <Suspense fallback={'로딩중'}>
        {todos && (
          <Styled.List>
            {todos.data.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                handleClickTodo={handleClickTodo}
              />
            ))}
            <Styled.AddButton onClick={openModal}>추가하기</Styled.AddButton>
          </Styled.List>
        )}
      </Suspense>
    </Styled.Section>
  );
};

export default TodoListSection;
