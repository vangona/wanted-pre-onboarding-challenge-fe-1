// API
export const API_HOST = 'http://localhost:8080';
export const LOCALSTORAGE_TOKEN_KEY = 'wanted_todo';
export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

// React Query
export const REACT_QUERY_KEY = {
  GET_TODOS: 'getTodos',
  GET_TODO_BY_ID: 'getTodoById',
} as const;

// Styles
export const HOME_STYLE = {
  LIST_SECTION_WIDTH: '300px',
  SECTION_PADDING: '30px',
  NOTE_PADDING: '30px',
};

export const Z_INDEX = {
  MODAL: 99,
  MODAL_DIMMER: 9,
};
