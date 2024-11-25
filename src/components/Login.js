import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './Login.css'; // Import the custom CSS for styling

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoggedIn(true);
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>

        <button type="button" onClick={handleLogin}>LOG IN</button>

        {error && <div className="error-message">{error}</div>}

        <p>
          <Link to="/forgot-password">Forgot password?</Link>
        </p>

        {/* Hide login and signup buttons if logged in */}
        {!isLoggedIn && (
          <>
            <p>or log in with</p>
            <div className="social-login">
              <button type="button">Facebook</button>
              <button type="button">Google</button>
            </div>

            <p>
              Need an account? <Link to="/SignUp">Sign up</Link>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
