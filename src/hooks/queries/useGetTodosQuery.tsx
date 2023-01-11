import apiGetTodos from '@apis/apiGetTodos';
import { useQuery } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';

const useGetTodosQuery = () => {
  const token = getUserToken();
  const { data } = useQuery([REACT_QUERY_KEY.GET_TODOS, token], {
    queryFn: () => apiGetTodos(token),
    enabled: !!token,
    suspense: true,
  });

  return { data };
};

export default useGetTodosQuery;
