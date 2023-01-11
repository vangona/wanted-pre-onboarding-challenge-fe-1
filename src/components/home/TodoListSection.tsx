import React, { Suspense } from 'react';
import deleteTodo from '@apis/deleteTodo';
import getTodos from '@apis/getTodos';
import TodoListItem from '@components/home/TodoListItem';
import useToken from '@hooks/useToken';
import * as Styled from '@styles/home/TodoListSection.style';
import { useQuery } from '@tanstack/react-query';
import { REACT_QUERY_KEY } from '@constants';
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
  const token = useToken();
  const { data: todos } = useQuery([REACT_QUERY_KEY.GET_TODOS, token], {
    queryFn: () => getTodos(token),
    enabled: !!token,
  });

  const handleClickDeleteTodo = async (id: string) => {
    const response = await deleteTodo(id, token);

    if ('details' in response) {
      alert(`삭제 중 문제가 발생했습니다. ${response.details}`);
    } else {
      alert('삭제되었습니다!');
      handleDeleteTodoEffect(id);
    }
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
