import React from 'react';
import TodoListItem from '@components/home/TodoListItem';
import useGetTodosQuery from '@hooks/queries/useGetTodosQuery';
import * as Styled from '@styles/home/TodoSidebar.style';

interface TodoSidebarProps {
  openModal: () => void;
}

const TodoSidebar = ({ openModal }: TodoSidebarProps) => {
  const { data: todos } = useGetTodosQuery();

  return (
    <Styled.Layout>
      <Styled.Title>오늘의 할 일 목록</Styled.Title>
      {todos && (
        <Styled.List>
          {todos.data.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
          <Styled.AddButton onClick={openModal}>추가하기</Styled.AddButton>
        </Styled.List>
      )}
    </Styled.Layout>
  );
};

export default TodoSidebar;
