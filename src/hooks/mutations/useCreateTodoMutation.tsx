import apiCreateTodo from '@apis/apiCreateTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';
import { CreateTodoResponseBody } from '#types/ApiResponseTypes';
import { Todo } from '#types/TodoTypes';

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

    queryClient.setQueryData(
      [REACT_QUERY_KEY.GET_TODOS],
      (old: Todo[] | undefined) => {
        if (!old) return [createTodoResponseBody.data];

        return [...old, createTodoResponseBody.data];
      },
    );

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
  });

  return mutation;
};

export default useCreateTodoMutation;
