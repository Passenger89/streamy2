import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StreamCreate from '../../pages/StreamCreate.jsx'
import StreamEdit from '../../pages/StreamEdit.jsx'
import StreamDelete from '../../pages/StreamDelete.jsx'
import StreamList from '../../pages/StreamList.jsx'
import StreamShow from '../../pages/StreamShow.jsx'
import Header from '../Header/Header.jsx'

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<StreamList />} />
          <Route path='/pages/new' element={<StreamCreate />} />
          <Route path='/pages/edit' element={<StreamEdit />} />
          <Route path='/pages/delete' element={<StreamDelete />} />
          <Route path='/pages/show' element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
