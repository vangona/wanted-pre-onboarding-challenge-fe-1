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
  LIST_SECTION_WIDTH_HALF: '150px', // 계산해야하는 곳이 더 많아지면 number로 변경
  SECTION_PADDING: '30px',
  NOTE_INNER_PADDING: '30px',
  NOTE_POSITION_PADDING: 10,
  NOTE_WIDTH: '320px',
  NOTE_HEIGHT: '240px',
};

export const Z_INDEX = {
  MODAL: 99,
  MODAL_DIMMER: 9,
};

// 배경 이미지
export const BG_IMG_COUNT = 12;
