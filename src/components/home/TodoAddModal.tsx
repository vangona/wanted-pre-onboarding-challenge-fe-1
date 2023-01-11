import React, { useState } from 'react';
import useCreateTodoMutation from '@hooks/mutations/useCreateTodoMutation';
import * as Styled from '@styles/home/TodoAddModal.style';

interface TodoAddModalProps {
  closeModal: () => void;
}

const TodoAddModal = ({ closeModal }: TodoAddModalProps) => {
  const { mutate, isError, error } = useCreateTodoMutation();
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todoContent, setTodoContent] = useState<string>('');

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
    mutate({ todoTitle, todoContent });

    if (!isError) closeModal();
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
        {error && <Styled.Error>{error.message}</Styled.Error>}
        <Styled.SubmitButton>제출하기</Styled.SubmitButton>
      </Styled.Form>
      <Styled.CloseButton onClick={closeModal}>x</Styled.CloseButton>
    </Styled.Container>
  );
};

export default TodoAddModal;
