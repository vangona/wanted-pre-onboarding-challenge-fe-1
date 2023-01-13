import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import ModalDimmer from '@components/common/ModalDimmer';
import ModalPortal from '@components/common/ModalPortal';
import HomeLayout from '@components/home/HomeLayout';
import TodoAddModal from '@components/home/TodoAddModal';
import TodoNote from '@components/home/TodoNote';
import TodoSidebar from '@components/home/TodoSidebar';
import useGetTodoByIdQuery from '@hooks/queries/useGetTodoByIdQuery';
import Clock from '@components/common/Clock';

const Home = () => {
  const [searchParams] = useSearchParams();
  const todoId = searchParams.get('todo');
  const { data: todoResponseBody } = useGetTodoByIdQuery(todoId || ''); // useQuery에서 enabled로 처리해줌.
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [noteOpacity, setNoteOpacity] = useState<number>(0.5);

  const handleChangeOpacity: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setNoteOpacity(+e.target.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HomeLayout>
      <Suspense fallback='로딩중...'>
        <TodoSidebar
          openModal={() => setIsModalOpen(true)}
          noteOpacity={noteOpacity}
          handleChangeOpacity={handleChangeOpacity}
        />
      </Suspense>
      <Clock />
      <Suspense fallback='로딩중...'>
        {todoResponseBody?.data && <TodoNote noteOpacity={noteOpacity} />}
      </Suspense>
      {isModalOpen && (
        <ModalPortal>
          <TodoAddModal closeModal={closeModal} />
          <ModalDimmer closeModal={closeModal} />
        </ModalPortal>
      )}
    </HomeLayout>
  );
};

export default Home;
