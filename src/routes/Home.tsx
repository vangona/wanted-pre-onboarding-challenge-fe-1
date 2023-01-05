import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [todo, setTodo] = useState<Todo | null>(null);
  const [todos, setTodos] = useState<Todo[]>([
    {
      title: '꿀잠',
      content: '안녕히 주무세용',
      id: '1',
    },
    {
      title: '뀨',
      content: '다음 할 일',
      id: '2',
    },
  ]);

  useEffect(() => {
    if (!checkIsValidToken(userToken)) {
      navigate('/auth');
    }
  }, [userToken, navigate]);

  useEffect(() => {
    setTodo(todos[0]);
  }, [todos]);

  return (
    <HomeLayout>
      {userToken}
      <ListSection todos={todos} />
      {todo && <DetailSection todo={todo} />}
    </HomeLayout>
  );
};

export default Home;
