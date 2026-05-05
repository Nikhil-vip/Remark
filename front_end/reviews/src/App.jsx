import { useState } from 'react'
import './App.css'
import Frontt from './dash.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Routes path='/' element={<Frontt />}></Routes>
      </Routes>
    </>
  )
}

export default App;
