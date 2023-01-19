import apiDeleteTodo from '@apis/apiDeleteTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';
import type { DeleteTodoResponseBody } from '#types/ApiResponseTypes';

interface DeleteTodoProps {
  todoId: string;
}

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const userToken = getUserToken();

  const deleteTodo = ({ todoId }: DeleteTodoProps) => {
    return apiDeleteTodo(todoId, userToken);
  };

  const updateTodos = () => {
    queryClient.invalidateQueries([REACT_QUERY_KEY.GET_TODOS, userToken]);

    alert('할 일이 성공적으로 삭제되었습니다!');
  };

  const mutation = useMutation<
    DeleteTodoResponseBody | undefined,
    Error,
    DeleteTodoProps
  >({
    mutationFn: deleteTodo,
    onSuccess: updateTodos,
    onError: (error) => {
      alert(error.message);
    },
  });

  return mutation;
};

export default useDeleteTodoMutation;
