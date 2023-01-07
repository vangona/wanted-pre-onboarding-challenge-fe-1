import React, { useState } from 'react';
import * as Styled from '@styles/home/EditForm.style';
import type { Todo } from '#types/TodoTypes';

interface EditFormProps {
  todo: Todo;
  handleFormEffect: () => void;
}

const EditForm = ({ todo, handleFormEffect }: EditFormProps) => {
  const [todoTitle, setTodoTitle] = useState<string>(todo.title);
  const [todoContent, setTodoContent] = useState<string>(todo.content);

  const handleChangeTodoTitle: React.FormEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    setTodoTitle(target.value);
  };

  const handleChangeTodoContent: React.FormEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    setTodoContent(target.value);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    handleFormEffect();
    if (todo.title === todoTitle && todo.content === todoContent) return;
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.TitleInput
        type='text'
        value={todoTitle}
        onChange={handleChangeTodoTitle}
      />
      <Styled.ContentInput
        type='text'
        value={todoContent}
        onChange={handleChangeTodoContent}
      />
      <Styled.SubmitButton>수정 완료</Styled.SubmitButton>
    </Styled.Form>
  );
};

export default EditForm;
