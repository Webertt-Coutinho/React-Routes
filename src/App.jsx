import { useState } from 'react'
import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Produtos from './Components/Produtos'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contato from './Components/Contato';
import Produto from './Components/Produto';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Produtos/>}></Route>
            <Route path='produto/:id' element={<Produto/>}></Route>
            <Route path='contato' element={<Contato/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
