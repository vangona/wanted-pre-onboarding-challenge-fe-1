import React, { useState } from 'react';
import * as Styled from '@styles/common/AddTodoModal.style';

interface AddTodoModalProps {
  onClose: () => void;
}

const AddTodoModal = ({ onClose }: AddTodoModalProps) => {
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

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    console.log(todoContent, todoTitle);
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
        <Styled.SubmitButton>제출하기</Styled.SubmitButton>
      </Styled.Form>
      <Styled.CloseButton onClick={onClose}>x</Styled.CloseButton>
    </Styled.Container>
  );
};

export default AddTodoModal;
