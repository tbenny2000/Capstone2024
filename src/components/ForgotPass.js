import React, { useState } from 'react';
import { auth } from './firebase'; // Adjust the import path as needed

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      setMessage(`Password reset link has been sent to ${email}`);
    } catch (error) {
      setMessage('Error sending password reset email');
      console.error('Error sending password reset email:', error);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPass;
