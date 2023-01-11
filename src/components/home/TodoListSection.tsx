import React, { Suspense } from 'react';
import apiDeleteTodo from '@apis/apiDeleteTodo';
import TodoListItem from '@components/home/TodoListItem';
import useGetTodosQuery from '@hooks/queries/useGetTodosQuery';
import * as Styled from '@styles/home/TodoListSection.style';
import getUserToken from '@utils/getUserToken';
import type { Todo } from '#types/TodoTypes';

interface TodoListSectionProps {
  handleClickTodo: (newTodo: Todo) => void;
  openModal: () => void;
  handleDeleteTodoEffect: (id: string) => void;
}

const TodoListSection = ({
  handleClickTodo,
  openModal,
  handleDeleteTodoEffect,
}: TodoListSectionProps) => {
  const token = getUserToken();
  const { data: todos } = useGetTodosQuery();

  const handleClickDeleteTodo = async (id: string) => {
    await apiDeleteTodo(id, token);

    alert('삭제되었습니다!');
    handleDeleteTodoEffect(id);
  };

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
                handleClickDeleteTodo={handleClickDeleteTodo}
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
