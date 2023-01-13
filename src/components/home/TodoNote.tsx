import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TodoDetail from '@components/home/TodoDetail';
import TodoEditForm from '@components/home/TodoEditForm';
import useGetTodoByIdQuery from '@hooks/queries/useGetTodoByIdQuery';
import * as Styled from '@styles/home/TodoNote.style';
import { HOME_STYLE } from '@constants';

interface TodoNoteProps {
  noteOpacity: number;
}

const TodoNote = ({ noteOpacity }: TodoNoteProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const todoId = searchParams.get('todo');
  const { data: todoResponseBody } = useGetTodoByIdQuery(todoId || ''); // useQuery에서 enabled로 처리해줌.
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [posLeft, setPosLeft] = useState<number>(0);
  const [posTop, setPosTop] = useState<number>(0);

  const getRandPos = () => {
    const randLeft =
      Math.random() *
      (window.innerWidth -
        parseInt(HOME_STYLE.LIST_SECTION_WIDTH.replace('px', '')) -
        parseInt(HOME_STYLE.NOTE_WIDTH.replace('px', '')) -
        HOME_STYLE.NOTE_POSITION_PADDING);
    const randTop =
      Math.random() *
      (window.innerHeight -
        parseInt(HOME_STYLE.NOTE_HEIGHT.replace('px', '')) -
        HOME_STYLE.NOTE_POSITION_PADDING);
    return [randLeft, randTop];
  };

  const handleDeleteNote = () => {
    searchParams.delete('todo');
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const [randLeft, randTop] = getRandPos();
    setPosLeft(randLeft);
    setPosTop(randTop);
  }, []);

  if (!todoResponseBody) return <></>;

  return (
    <Styled.Layout left={posLeft} top={posTop} defaultOpacity={noteOpacity}>
      {isEditMode ? (
        <TodoEditForm
          todo={todoResponseBody.data}
          closeEditMode={() => setIsEditMode(false)}
        />
      ) : (
        <TodoDetail
          todo={todoResponseBody.data}
          handleClickEdit={() => setIsEditMode(true)}
        />
      )}
      <Styled.CloseButton onClick={handleDeleteNote}>X</Styled.CloseButton>
    </Styled.Layout>
  );
};

export default TodoNote;
