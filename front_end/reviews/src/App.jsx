import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Frontt from './dash.jsx';
import Addnew from './adder.jsx';
function App() {

  return (
    <>
      <Routes>
        <Routes path='/' element={<Frontt />}></Routes>
        <Routes path='/adder.jsx' element={<Addnew />}></Routes>
      </Routes>
    </>
  )
}

export default App;
