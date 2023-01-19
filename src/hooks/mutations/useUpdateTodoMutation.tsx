import apiUpdateTodo from '@apis/apiUpdateTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';
import type {
  UpdateTodoResponseBody,
  GetTodosResponseBody,
} from '#types/ApiResponseTypes';

interface UpdateTodoProps {
  todoId: string;
  todoTitle: string;
  todoContent: string;
}

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  const userToken = getUserToken();

  const updateTodo = ({ todoId, todoTitle, todoContent }: UpdateTodoProps) => {
    return apiUpdateTodo(todoId, todoTitle, todoContent, userToken);
  };

  const updateTodos = (
    updateTodoResponseBody: UpdateTodoResponseBody | undefined,
  ) => {
    if (!updateTodoResponseBody) return;

    queryClient.invalidateQueries([REACT_QUERY_KEY.GET_TODOS, userToken]);
    queryClient.invalidateQueries([
      REACT_QUERY_KEY.GET_TODO_BY_ID,
      updateTodoResponseBody.data.id,
    ]);

    alert(
      `할 일이 성공적으로 수정되었습니다! ${updateTodoResponseBody.data.title}`,
    );
  };

  const mutation = useMutation<
    UpdateTodoResponseBody | undefined,
    Error,
    UpdateTodoProps
  >({
    mutationFn: updateTodo,
    onSuccess: updateTodos,
    onError: (error) => {
      alert(error.message);
    },
  });

  return mutation;
};

export default useUpdateTodoMutation;
