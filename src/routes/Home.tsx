import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getTodos from '@apis/getTodos';
import AddTodoModal from '@components/common/AddTodoModal';
import ModalPortal from '@components/common/ModalPortal';
import DetailSection from '@components/home/DetailSection';
import HomeLayout from '@components/home/HomeLayout';
import ListSection from '@components/home/ListSection';
import checkIsValidToken from '@utils/checkIsValidToken';
import type { Todo } from '#types/TodoTypes';
import ModalDimmer from '@components/common/ModalDimmer';

interface HomeProps {
  userToken: string;
}

const Home = ({ userToken }: HomeProps) => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState<Todo | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickTodo = (newTodo: Todo) => {
    setTodo(newTodo);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!checkIsValidToken(userToken)) {
      navigate('/auth');
      return;
    }

    getTodos(userToken).then((res) => {
      if ('details' in res) {
        // 에러가 발생현 경우 early return
        alert(res.details);

        return;
      }
      setTodos(res.data);
    });
  }, [userToken, navigate]);

  useEffect(() => {
    setTodo(todos[0]);
  }, [todos]);

  return (
    <HomeLayout>
      <ListSection
        todos={todos}
        handleClickTodo={handleClickTodo}
        openModal={() => setIsModalOpen(true)}
      />
      {todo && <DetailSection todo={todo} />}
      {isModalOpen && (
        <ModalPortal>
          <AddTodoModal closeModal={closeModal} />
          <ModalDimmer closeModal={closeModal} />
        </ModalPortal>
      )}
    </HomeLayout>
  );
};

export default Home;
