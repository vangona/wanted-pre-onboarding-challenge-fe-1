import React, { useState } from 'react';
import useUpdateTodoMutation from '@hooks/mutations/useUpdateTodoMutation';
import * as Styled from '@styles/home/TodoEditForm.style';
import type { Todo } from '#types/TodoTypes';

interface TodoEditFormProps {
  todo: Todo;
  closeEditMode: () => void;
}

const TodoEditForm = ({ todo, closeEditMode }: TodoEditFormProps) => {
  const { mutate: updateTodo } = useUpdateTodoMutation();
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

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    closeEditMode();
    if (todo.title === todoTitle && todo.content === todoContent) return;

    updateTodo({ todoId: todo.id, todoTitle, todoContent });
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

export default TodoEditForm;
