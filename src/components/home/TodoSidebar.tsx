import React from 'react';
import TodoListItem from '@components/home/TodoListItem';
import useGetTodosQuery from '@hooks/queries/useGetTodosQuery';
import * as Styled from '@styles/home/TodoSidebar.style';

interface TodoSidebarProps {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
  openModal: () => void;
  noteOpacity: number;
  handleChangeOpacity: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoSidebar = ({
  isSidebarOpen,
  handleToggleSidebar,
  openModal,
  noteOpacity,
  handleChangeOpacity,
}: TodoSidebarProps) => {
  const { data: todos } = useGetTodosQuery();

  return (
    <Styled.Layout isSidebarOpen={isSidebarOpen}>
      <Styled.Title>오늘의 할 일 목록</Styled.Title>
      {todos && (
        <Styled.List>
          {todos.data.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
          <Styled.AddButton onClick={openModal}>추가하기</Styled.AddButton>
        </Styled.List>
      )}
      <Styled.OpacityInput
        onChange={handleChangeOpacity}
        type='range'
        value={noteOpacity}
        min={0}
        max={1}
        step={0.1}
      />
      <Styled.ToggleSidebar onClick={handleToggleSidebar}>
        {isSidebarOpen ? '<<' : '>>'}
      </Styled.ToggleSidebar>
    </Styled.Layout>
  );
};

export default TodoSidebar;
