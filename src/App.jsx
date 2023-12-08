import React from 'react'
import Auth from './views/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeController from './controllers/HomeController'
import DetailController from './controllers/DetailController'
import HeaderView from './views/HeaderView'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.coincap.io/v2'
const App = () => {
  return (
   <BrowserRouter>
   <HeaderView/>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/home' element={<HomeController/>}/>
        <Route path='/coins/:id' element={<DetailController/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
