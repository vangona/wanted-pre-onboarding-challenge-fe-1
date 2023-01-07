import React from 'react';
import * as Styled from '@styles/common/AddTodoModal.style';

interface AddTodoModalProps {
  onClose: () => void;
}

const AddTodoModal = ({ onClose }: AddTodoModalProps) => {
  return (
    <Styled.Container>
      <Styled.Header>할 일 추가하기</Styled.Header>
      <Styled.Form>
        <Styled.Box>
          <Styled.Label>할 일 제목 : </Styled.Label>
          <Styled.TitleInput type='text' />
        </Styled.Box>
        <Styled.Box>
          <Styled.Label>할 일 내용 : </Styled.Label>
          <Styled.ContentInput type='text' />
        </Styled.Box>
        <Styled.SubmitButton>제출하기</Styled.SubmitButton>
      </Styled.Form>
      <Styled.CloseButton onClick={onClose}>x</Styled.CloseButton>
    </Styled.Container>
  );
};

export default AddTodoModal;
