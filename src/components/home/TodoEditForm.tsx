import React, { useState } from 'react';
import apiUpdateTodo from '@apis/apiUpdateTodo';
import * as Styled from '@styles/home/TodoEditForm.style';
import getUserToken from '@utils/getUserToken';
import type { Todo } from '#types/TodoTypes';

interface TodoEditFormProps {
  todo: Todo;
  handleEditTodoEffect: (edittedTodoItem: Todo) => void;
  closeEditMode: () => void;
}

const TodoEditForm = ({
  todo,
  handleEditTodoEffect,
  closeEditMode,
}: TodoEditFormProps) => {
  const token = getUserToken();
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

    const response = await apiUpdateTodo(
      todo.id,
      todoTitle,
      todoContent,
      token,
    );

    if ('details' in response) {
      alert(`수정 중 문제가 발생했습니다. ${response.details}`);
    } else {
      alert(`할 일이 성공적으로 변경되었습니다! ${response.data.title}`);
      handleEditTodoEffect(response.data);
    }
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
