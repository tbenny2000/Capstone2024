import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove login status from localStorage
    setIsLoggedIn(false); // Update state to reflect user being logged out
  };

  return (
    <nav className="navbar">
  <div className="navbar-container">
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <div className="dropdown">
        <button className="dropbtn">Pets</button>
        <div className="dropdown-content">
          <Link to="/cats">Cats</Link>
          <Link to="/dogs">Dogs</Link>
          <Link to="/others">Others</Link>
        </div>
      </div>
      <Link to="/adoption-process" className="nav-link">Adoption Process</Link>
    </div>
    <div className="user-links">
      {isLoggedIn ? (
        <>
          <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </>
      )}
    </div>
  </div>
</nav>
  );
};

export default Navbar;
