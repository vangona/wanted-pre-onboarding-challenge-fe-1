import apiCreateTodo from '@apis/apiCreateTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';
import { CreateTodoResponseBody } from '#types/ApiResponseTypes';
interface CreateTodoProps {
  todoTitle: string;
  todoContent: string;
}

const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  const userToken = getUserToken();

  const createTodo = ({ todoTitle, todoContent }: CreateTodoProps) => {
    return apiCreateTodo(todoTitle, todoContent, userToken);
  };

  const updateTodos = (
    createTodoResponseBody: CreateTodoResponseBody | undefined,
  ) => {
    if (!createTodoResponseBody) return;

    queryClient.invalidateQueries([REACT_QUERY_KEY.GET_TODOS, userToken]);

    alert(
      `할 일이 성공적으로 추가되었습니다! ${createTodoResponseBody.data.title}`,
    );
  };

  const mutation = useMutation<
    CreateTodoResponseBody | undefined,
    Error,
    CreateTodoProps
  >({
    mutationFn: createTodo,
    onSuccess: updateTodos,
    onError: (error) => {
      alert(error.message);
    },
  });

  return mutation;
};

export default useCreateTodoMutation;
