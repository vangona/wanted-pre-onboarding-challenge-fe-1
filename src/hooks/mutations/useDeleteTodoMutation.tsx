import apiDeleteTodo from '@apis/apiDeleteTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';
import type { DeleteTodoResponseBody } from '#types/ApiResponseTypes';
import type { Todo } from '#types/TodoTypes';

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
      [REACT_QUERY_KEY.GET_TODOS],
      (old: Todo[] | undefined) => {
        if (!old) return [];
        return old.filter((todo) => todo.id === todoId);
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
