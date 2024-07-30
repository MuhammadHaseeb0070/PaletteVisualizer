// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Hero from './components/Hero/Hero';
import Garage from './components/Garage/Garage';

function App() {
  return (
    <Router basename="/PaletteVisualizer">
      <div className='AppScreen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/garage" element={<Garage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
