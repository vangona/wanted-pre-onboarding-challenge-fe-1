import React from 'react';
import deleteTodo from '@apis/deleteTodo';
import useToken from '@hooks/useToken';
import * as Styled from '@styles/home/ListSection.style';
import type { Todo } from '#types/TodoTypes';

interface ListSectionProps {
  todos: Todo[];
  handleClickTodo: (newTodo: Todo) => void;
  openModal: () => void;
  handleDeleteTodoEffect: (id: string) => void;
}

const ListSection = ({
  todos,
  handleClickTodo,
  openModal,
  handleDeleteTodoEffect,
}: ListSectionProps) => {
  const token = useToken();
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
      <Styled.List>
        {todos.map((todo) => (
          <Styled.ListItem key={todo.id}>
            <Styled.TodoTitle onClick={() => handleClickTodo(todo)}>
              {todo.title}
            </Styled.TodoTitle>
            <Styled.DeleteButton
              onClick={() =>
                window.confirm('삭제하시겠습니까?') &&
                handleClickDeleteTodo(todo.id)
              }
            >
              삭제하기
            </Styled.DeleteButton>
          </Styled.ListItem>
        ))}
        <Styled.AddButton onClick={openModal}>추가하기</Styled.AddButton>
      </Styled.List>
    </Styled.Section>
  );
};

export default ListSection;
