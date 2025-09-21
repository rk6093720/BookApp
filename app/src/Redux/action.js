import * as types from "./actionTypes";
import axios from "axios";
const getBook = () => async (dispatch) => {
   dispatch({ type: types.GET_BOOKS_REQUEST });
  return await axios
    .get("http://localhost:8080/books")
    .then((r) => {
      return dispatch({
         type: types.GET_BOOKS_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      return dispatch({type: types.GET_BOOKS_FAILURE, payload: e });
    });
};
const createBook = (params) => async (dispatch) => {
  dispatch({ type: types.CREATE_BOOK_REQUEST });
  return await axios.post("http://localhost:8080/books",params)
  .then((r)=>{
      return dispatch({ type: types.CREATE_BOOK_SUCCESS, payload: r.data });
  })
  .catch ((e)=>{
    return dispatch({ type: types.CREATE_BOOK_FAILURE, payload: e });
  })
};
 const updateBook = (id, payload) => async (dispatch) => {
  const bookId = Number(id); // Ensure numeric id
  console.log("📤 Updating book:", bookId, payload);

  dispatch({ type: types.UPDATE_BOOK_REQUEST });

  try {
    const res = await axios.put(
      `http://localhost:8080/books/${bookId}`,
      payload
    );

    console.log("✅ Updated Response:", res.data);

    dispatch({ type: types.UPDATE_BOOK_SUCCESS, payload: res.data });
  } catch (error) {
    console.error("❌ Update Failed:", error.message);
    dispatch({ type: types.UPDATE_BOOK_FAILURE, payload: error.message });
  }
};
const deleteBook = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_BOOK_REQUEST });
   return await axios.delete(`http://localhost:8080/books/${id}`)
   .then((r)=>{
    return dispatch({ type: types.DELETE_BOOK_SUCCESS, payload: r.data });
   })
  .catch((e)=>{
   return dispatch({ type: types.DELETE_BOOK_FAILURE, payload: e });
  })
};
export { getBook,createBook, updateBook, deleteBook };
