import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ModalDimmer from '@components/common/ModalDimmer';
import ModalPortal from '@components/common/ModalPortal';
import HomeLayout from '@components/home/HomeLayout';
import TodoAddModal from '@components/home/TodoAddModal';
import TodoNote from '@components/home/TodoNote';
import TodoSidebar from '@components/home/TodoSidebar';
import useGetTodoByIdQuery from '@hooks/queries/useGetTodoByIdQuery';
import checkIsValidToken from '@utils/checkIsValidToken';
import getUserToken from '@utils/getUserToken';

const Home = () => {
  const userToken = getUserToken();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const todoId = searchParams.get('todo');
  const { data: todoResponseBody } = useGetTodoByIdQuery(todoId || ''); // useQuery에서 enabled로 처리해줌.
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!userToken) return;
    if (!checkIsValidToken(userToken)) {
      navigate('/auth');
      return;
    }
  }, [userToken, navigate]);

  return (
    <HomeLayout>
      <Suspense fallback='로딩중...'>
        <TodoSidebar openModal={() => setIsModalOpen(true)} />
      </Suspense>
      <Suspense fallback='로딩중...'>
        {todoResponseBody?.data && <TodoNote />}
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
