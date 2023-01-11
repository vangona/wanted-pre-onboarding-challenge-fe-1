import apiCreateTodo from '@apis/apiCreateTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getUserToken from '@utils/getUserToken';
import { REACT_QUERY_KEY } from '@constants';
import { CreateTodoResponseBody } from '#types/ApiResponseTypes';
import { Todo } from '#types/TodoTypes';

interface createTodoProps {
  todoTitle: string;
  todoContent: string;
}

const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  const userToken = getUserToken();

  const createTodo = ({ todoTitle, todoContent }: createTodoProps) => {
    return apiCreateTodo(todoTitle, todoContent, userToken);
  };

  const mutation = useMutation<
    CreateTodoResponseBody | undefined,
    Error,
    createTodoProps
  >({
    mutationFn: createTodo,
    onSuccess: (createTodoResponseBody) => {
      if (!createTodoResponseBody) return;

      queryClient.setQueryData(
        [REACT_QUERY_KEY.GET_TODOS],
        (old: Todo[] | undefined) => {
          if (!old) return [createTodoResponseBody.data];

          return [...old, createTodoResponseBody.data];
        },
      );
    },
  });

  return mutation;
};

export default useCreateTodoMutation;
