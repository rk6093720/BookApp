import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditBook from './EditBook'
import BookList from '../component/BookList';
import AddBook from '../component/AddBook';
const MainRoute = () => {
  return (
    <Routes>
      <Route path='/:id/edit' element={<EditBook/>}/>
      <Route path='/' element={<BookList/>}/>
      <Route path='/add' element={<AddBook/>}/>
    </Routes>
  )
}

export default MainRoute
