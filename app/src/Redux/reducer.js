import * as types from "./actionTypes";
const InitialState = {
  books: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_BOOKS_FAILURE:
      return {
        ...state,

        isLoading: false,
        isError: true,
      };
    case types.CREATE_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.CREATE_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, payload],
        isLoading: false,
        isError: false,
      };
    case types.CREATE_BOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.DELETE_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== payload),
        isLoading: false,
        isError: false,
      };
    case types.DELETE_BOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    // eslint-disable-next-line no-duplicate-case
    case types.UPDATE_BOOK_REQUEST:
      let newupdate = state.books.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        books: newupdate,
        isLoading: false,
        isError: false,
      };
    case types.UPDATE_BOOK_FAILURE:
      return {
        ...state,

        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
 