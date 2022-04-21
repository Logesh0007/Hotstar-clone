import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './Detail';
import Login from './Login';
import Trailer from './Trailer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
