import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Login.css'; // Make sure you import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      }
      const baseUrl = process.env.NODE_ENV === 'production' ? 'https://todo-be-peach.vercel.app' : '';
      const response = await fetch(`${baseUrl}/api/login`, option);
      if (response.ok) {
        navigate('/dashboard');
      } else {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage || 'Incorrect email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to log in');
    }
  };

  return (
    <div className="main">
      <div className="login">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">Log in</label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <div className="error-message" role="alert">
              <strong>Error:</strong>
              <span>{errorMessage}</span>
            </div>
          )}
          <button>Log in</button>
        </form>
        <div className="text-center">
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
