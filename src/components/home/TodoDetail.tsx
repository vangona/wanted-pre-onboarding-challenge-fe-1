import React, { useState } from 'react';
import useUpdateTodoMutation from '@hooks/mutations/useUpdateTodoMutation';
import * as Styled from '@styles/home/TodoDetail.style';
import type { Todo } from '#types/TodoTypes';

interface TodoDetailProps {
  todo: Todo;
}

const TodoDetail = ({ todo }: TodoDetailProps) => {
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const [isEdit, setIsEdit] = useState(false);
  const [edittedTitle, setEdittedTitle] = useState(todo.title);
  const [edittedContent, setEdittedContent] = useState(todo.content);

  const toggleIsEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setIsEdit(false);
    if (todo.title === edittedTitle && todo.content === edittedContent) return;

    updateTodo({
      todoId: todo.id,
      todoTitle: edittedTitle,
      todoContent: edittedContent,
    });
  };

  const handleChangeTitle: React.FormEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement; // 제네릭을 입력해줘도 target이 타입추론이 되지 않고 있음.
    setEdittedTitle(target.innerText);
  };

  const handleChangeContent: React.FormEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement; // 제네릭을 입력해줘도 target이 타입추론이 되지 않고 있음.
    setEdittedContent(target.innerText);
  };

  return (
    <>
      <Styled.Title
        contentEditable={isEdit}
        suppressContentEditableWarning
        onInput={handleChangeTitle}
      >
        {todo.title}
      </Styled.Title>
      <Styled.Content
        contentEditable={isEdit}
        suppressContentEditableWarning
        onInput={handleChangeContent}
      >
        {todo.content}
      </Styled.Content>
      <Styled.EditButton onClick={isEdit ? handleSubmit : toggleIsEdit}>
        {isEdit ? '수정완료' : '수정하기'}
      </Styled.EditButton>
    </>
  );
};

export default TodoDetail;
