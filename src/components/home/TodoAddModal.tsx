import React, { useState } from 'react';
import createTodo from '@apis/createTodo';
import * as Styled from '@styles/home/TodoAddModal.style';
import getUserToken from '@utils/getUserToken';
import type { Todo } from '#types/TodoTypes';

interface TodoAddModalProps {
  closeModal: () => void;
  handleAddTodoEffect: (newTodoItem: Todo) => void;
}

const TodoAddModal = ({
  closeModal,
  handleAddTodoEffect,
}: TodoAddModalProps) => {
  const token = getUserToken();
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todoContent, setTodoContent] = useState<string>('');
  const [error, setError] = useState('');

  const handleChangeTodoTitle: React.ChangeEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    setTodoTitle(target.value);
  };

  const handleChangeTodoContent: React.ChangeEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    setTodoContent(target.value);
  };

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setError('');
    const response = await createTodo(todoTitle, todoContent, token);

    if ('details' in response) {
      setError(response.details);
    } else {
      alert(`할 일이 성공적으로 추가되었습니다! ${response.data.title}`);
      handleAddTodoEffect(response.data);
      closeModal();
    }
  };

  return (
    <Styled.Container>
      <Styled.Header>할 일 추가하기</Styled.Header>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Box>
          <Styled.Label>할 일 제목 : </Styled.Label>
          <Styled.TitleInput
            type='text'
            value={todoTitle}
            onChange={handleChangeTodoTitle}
          />
        </Styled.Box>
        <Styled.Box>
          <Styled.Label>할 일 내용 : </Styled.Label>
          <Styled.ContentInput
            type='text'
            value={todoContent}
            onChange={handleChangeTodoContent}
          />
        </Styled.Box>
        {error && <Styled.Error>{error}</Styled.Error>}
        <Styled.SubmitButton>제출하기</Styled.SubmitButton>
      </Styled.Form>
      <Styled.CloseButton onClick={closeModal}>x</Styled.CloseButton>
    </Styled.Container>
  );
};

export default TodoAddModal;
