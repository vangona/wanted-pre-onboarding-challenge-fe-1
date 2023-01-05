import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getTodos from '@apis/getTodos';
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
      createdAt: '2022-07-24T14:15:55.537Z',
      updatedAt: '2022-07-24T14:15:55.537Z',
    },
    {
      title: '뀨',
      content: '다음 할 일',
      id: '2',
      createdAt: '2022-07-24T14:15:55.537Z',
      updatedAt: '2022-07-24T14:15:55.537Z',
    },
  ]);

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
      {userToken}
      <ListSection todos={todos} />
      {todo && <DetailSection todo={todo} />}
    </HomeLayout>
  );
};

export default Home;
