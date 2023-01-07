import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getTodos from '@apis/getTodos';
import ModalDimmer from '@components/common/ModalDimmer';
import ModalPortal from '@components/common/ModalPortal';
import AddTodoModal from '@components/home/AddTodoModal';
import DetailSection from '@components/home/DetailSection';
import HomeLayout from '@components/home/HomeLayout';
import ListSection from '@components/home/ListSection';
import checkIsValidToken from '@utils/checkIsValidToken';
import type { Todo } from '#types/TodoTypes';

interface HomeProps {
  userToken: string;
}

const Home = ({ userToken }: HomeProps) => {
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

  const handleEditTodoEffect = (edittedTodoItem: Todo) => {
    const edittedTodos = todos.map((todoItem) => {
      if (todoItem.id !== edittedTodoItem.id) return todoItem;
      return edittedTodoItem;
    });
    setTodos(edittedTodos);
  };

  // TODO: React Query Mutation으로 리팩토링하기
  const handleAddTodoEffect = (newTodoItem: Todo) => {
    setTodos([...todos, newTodoItem]);
  };

  useEffect(() => {
    if (!userToken) return;
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
    const todoById = todos.filter(
      (data) => data.id === searchParams.get('todo'),
    )[0];
    setTodo(todoById);
  }, [todos, searchParams]);

  return (
    <HomeLayout>
      <ListSection
        todos={todos}
        handleClickTodo={handleClickTodo}
        openModal={() => setIsModalOpen(true)}
      />
      {todo && (
        <DetailSection
          todo={todo}
          handleEditTodoEffect={handleEditTodoEffect}
        />
      )}
      {isModalOpen && (
        <ModalPortal>
          <AddTodoModal
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
