import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getTodos from '@apis/apiGetTodos';
import ModalDimmer from '@components/common/ModalDimmer';
import ModalPortal from '@components/common/ModalPortal';
import HomeLayout from '@components/home/HomeLayout';
import TodoAddModal from '@components/home/TodoAddModal';
import TodoDetailSection from '@components/home/TodoDetailSection';
import TodoListSection from '@components/home/TodoListSection';
import checkIsValidToken from '@utils/checkIsValidToken';
import getUserToken from '@utils/getUserToken';
import type { Todo } from '#types/TodoTypes';

const Home = () => {
  const userToken = getUserToken();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [todo, setTodo] = useState<Todo | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickTodo = (newTodo: Todo) => {
    setSearchParams({ todo: newTodo.id });
    setTodo(newTodo);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteTodoEffect = (id: string) => {
    const filteredTodos = todos.filter((todoItem) => todoItem.id !== id);
    setTodos(filteredTodos);
  };

  useEffect(() => {
    if (!userToken) return;
    if (!checkIsValidToken(userToken)) {
      navigate('/auth');
      return;
    }

    getTodos(userToken).then((response) => {
      response && setTodos(response.data);
    });
  }, [userToken, navigate]);

  useEffect(() => {
    const todoById = todos.filter(
      (data) => data.id === searchParams.get('todo'),
    )[0];
    setTodo(todoById);
  }, [todos, searchParams]);

  return (
    <HomeLayout>
      <TodoListSection
        handleClickTodo={handleClickTodo}
        openModal={() => setIsModalOpen(true)}
        handleDeleteTodoEffect={handleDeleteTodoEffect}
      />
      {todo && <TodoDetailSection todo={todo} />}
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
