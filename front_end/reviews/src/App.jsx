import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Frontt from './dash.jsx';
import Addnew from './adder.jsx';
import User_in from './inputt.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Frontt />} />
        <Route path="/adder.jsx" element={<Addnew />} />
        <Route path="/inputt.jsx" element={<User_in />} />
      </Routes>
    </>
  )
}

export default App;
