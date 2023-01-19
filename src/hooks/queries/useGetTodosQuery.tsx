import apiGetTodos from '@apis/apiGetTodos';
import { useQuery } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';

const useGetTodosQuery = () => {
  const token = getUserToken();
  const { data, isError, error } = useQuery(
    [REACT_QUERY_KEY.GET_TODOS, token],
    {
      queryFn: () => apiGetTodos(token),
      enabled: !!token,
      suspense: true,
    },
  );

  if (isError && error instanceof Error) {
    alert(error.message);
  }

  return { data };
};

export default useGetTodosQuery;
