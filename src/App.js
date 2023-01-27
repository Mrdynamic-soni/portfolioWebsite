import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './components/header.css';
import './components/home.css';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route  exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;