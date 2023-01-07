import React from 'react';
import * as Styled from '@styles/common/AddTodoModal.style';

interface AddTodoModalProps {
  onClose: () => void;
}

const AddTodoModal = ({ onClose }: AddTodoModalProps) => {
  return <Styled.Container onClick={onClose}>투두 추가 모달</Styled.Container>;
};

export default AddTodoModal;
