import apiDeleteTodo from '@apis/apiDeleteTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';
import type {
  GetTodosResponseBody,
  DeleteTodoResponseBody,
} from '#types/ApiResponseTypes';

interface DeleteTodoProps {
  todoId: string;
}

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const userToken = getUserToken();

  const deleteTodo = ({ todoId }: DeleteTodoProps) => {
    return apiDeleteTodo(todoId, userToken);
  };

  const updateTodos = (
    _: DeleteTodoResponseBody | undefined,
    { todoId }: DeleteTodoProps,
  ) => {
    queryClient.setQueryData(
      [REACT_QUERY_KEY.GET_TODOS, userToken],
      (old: GetTodosResponseBody | undefined) => {
        if (!old) return { data: [] };
        const deletedData = {
          data: old.data.filter((todo) => todo.id === todoId),
        };
        return deletedData;
      },
    );

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
