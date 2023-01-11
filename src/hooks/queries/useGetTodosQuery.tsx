import getTodos from '@apis/getTodos';
import useToken from '@hooks/useToken';
import { useQuery } from '@tanstack/react-query';
import { REACT_QUERY_KEY } from '@constants';

const useGetTodosQuery = () => {
  const token = useToken();
  const { data } = useQuery([REACT_QUERY_KEY.GET_TODOS, token], {
    queryFn: () => getTodos(token),
    enabled: !!token,
  });

  return { data };
};

export default useGetTodosQuery;
