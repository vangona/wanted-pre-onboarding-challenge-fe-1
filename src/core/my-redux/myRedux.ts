type State = Record<string, unknown>;

interface Action {
  type: string;
  payload: {};
}

export const myCreateStore = (
  reducer: (state: State, action: Action) => void,
) => {
  const currentState: State = {};
  const currentReducer = reducer;
  let currentListeners: Function[] = [];

  const dispatch = (action: Action) => {
    currentReducer(currentState, action);
    currentListeners.forEach((listener) => {
      listener();
    });
  };

  const subscribe = (subscriber: Function) => {
    currentListeners = currentListeners.concat(subscriber);
  };

  const getState = () => {
    return currentState;
  };

  return {
    dispatch,
    subscribe,
    getState,
  };
};
