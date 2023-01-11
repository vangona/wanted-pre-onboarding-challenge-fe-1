import apiGetTodoById from '@apis/apiGetTodoById';
import { useQuery } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';

const useGetTodoByIdQuery = (todoId: string) => {
  const token = getUserToken();
  const { data } = useQuery([REACT_QUERY_KEY.GET_TODO_BY_ID, todoId], {
    queryFn: () => apiGetTodoById(todoId, token),
    enabled: !!token && !!todoId,
  });

  return { data };
};

export default useGetTodoByIdQuery;
