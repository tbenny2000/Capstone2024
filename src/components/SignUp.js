// SignUp.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; // Import Firebase Auth specifically
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyALByXBozUiz_pM8kqbQczm3zq8fTwGXOw",
  authDomain: "petfriends-b9906.firebaseapp.com",
  projectId: "petfriends-b9906",
  storageBucket: "petfriends-b9906.appspot.com",
  messagingSenderId: "507219362295",
  appId: "1:507219362295:web:796f8222eaa22c56f16ef2",
  measurementId: "G-C2C4ZQEYM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
    password: '',
    agreeTerms: false,
    SizeType: false,
    SizeType2: false,
    SizeType3: false,
    AnimalType: false,
    AnimalType2: false,
    MainType: false,
    MainType2: false,
    MainType3: false,
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null); // State variable to hold error message

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignUp = () => {
    const { email, password } = formData;

    // Create new user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log('User signed up:', user);

        // Create a new Firestore collection called 'users'
        const db = firebase.firestore();
        const usersCollection = db.collection('users');

        // Add form data to the Firestore collection under the document named after the user's email
        usersCollection.doc(email).set(formData)
          .then(() => {
            console.log('Form data added to Firestore successfully.');
          })
          .catch((error) => {
            console.error('Error adding form data to Firestore:', error);
          });

        // You can do something here after successful signup
        navigate('/login');
      })
      .catch((error) => {
        // Handle signup errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Signup error:', errorCode, errorMessage);
        // You can display error messages to the user or handle them accordingly
        setError(errorMessage);
      });
  };

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <div className='form'>
        <div className='container'>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter Your First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Your Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="zip">Zip:</label>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="Enter Your Zip"
                value={formData.zip}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <p>Animal Size Preference</p>
              <label htmlFor='SizeType'>Small:
                <input
                  type="checkbox"
                  name="SizeType"
                  checked={formData.SizeType}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor='SizeType2'>Medium:
                <input
                  type="checkbox"
                  name="SizeType2"
                  checked={formData.SizeType2}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor='SizeType3'>Large:
                <input
                  type="checkbox"
                  name="SizeType3"
                  checked={formData.SizeType3}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="form-group">
              <p>Animal Type</p>
              <label htmlFor='AnimalType'>Hairy:
                <input
                  type="checkbox"
                  name="AnimalType"
                  checked={formData.AnimalType}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor='AnimalType2'>Scaled:
                <input
                  type="checkbox"
                  name="AnimalType2"
                  checked={formData.AnimalType2}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="form-group">
              <p>Animal Maintenance Preference</p>
              <label htmlFor='MainType'>Low-Maintenance:
                <input
                  type="checkbox"
                  name="MainType"
                  checked={formData.MainType}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor='MainType2'>Medium-Maintenance:
                <input
                  type="checkbox"
                  name="MainType2"
                  checked={formData.MainType2}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor='MainType3'>High-Maintenance:
                <input
                  type="checkbox"
                  name="MainType3"
                  checked={formData.MainType3}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                />
                Yes, I agree to receiving email and other marketing communications from Petfinder and Purina and its brands. I certify that I am over 18 years old and I have read and agree with the Notice at Collection, Privacy Policy, and Terms and Conditions.
              </label>
            </div>

            <div>
              {/* Display error message if there is one */}
              {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
              {/* Your JSX code for the signup form */}
            </div>

            <div className="form-group">
              <button type="button" onClick={handleSignUp}>SIGN UP</button>
            </div>

            <p>Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
