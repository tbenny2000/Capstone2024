import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Others from './components/Others';
import AdoptionProcess from './components/AdoptionProcess';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  return (
    <Router>
      <div className="app-container">
        <Navbar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
        <div className="content-container">
          <Routes>
            {/* Pass isLoggedIn and setIsLoggedIn to child components */}
            <Route path="/" element={<Home />} />
            <Route path="/cats" element={<Cats />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/others" element={<Others />} />
            <Route path="/adoption-process" element={<AdoptionProcess />} />
            {/* Pass setIsLoggedIn function to Login component */}
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
