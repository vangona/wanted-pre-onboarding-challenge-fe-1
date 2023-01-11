import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getTodos from '@apis/getTodos';
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

  // TODO: React Query Mutation으로 리팩토링하기
  const handleAddTodoEffect = (newTodoItem: Todo) => {
    setTodos([...todos, newTodoItem]);
  };

  const handleEditTodoEffect = (edittedTodoItem: Todo) => {
    const edittedTodos = todos.map((todoItem) => {
      if (todoItem.id !== edittedTodoItem.id) return todoItem;
      return edittedTodoItem;
    });
    setTodos(edittedTodos);
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
      {todo && (
        <TodoDetailSection
          todo={todo}
          handleEditTodoEffect={handleEditTodoEffect}
        />
      )}
      {isModalOpen && (
        <ModalPortal>
          <TodoAddModal
            closeModal={closeModal}
            handleAddTodoEffect={handleAddTodoEffect}
          />
          <ModalDimmer closeModal={closeModal} />
        </ModalPortal>
      )}
    </HomeLayout>
  );
};

export default Home;
