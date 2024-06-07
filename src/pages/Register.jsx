  import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


  const Register = () => {
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!password.match(/^[a-zA-Z]/)) {
        alert("Password must start with a letter.");
        return;
      }

      try {

        const option = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ firstname, lastname, email, password }),
        }
     

    const response = await fetch(`${import.meta.env.BASE_URL}api/register`, option);
        console.log(response);
        if (response.ok) {  
          navigate('/dashboard');
        }
        else {
          const errorMessage = await response.text();
          setErrorMessage(errorMessage || 'Incorrect email or password');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to sign up');
      }
    };


    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up for an account
            </h2>
          </div>
          <form onSubmit={ handleSubmit } className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">

              <div>
                <label htmlFor="firstname" className="sr-only">
                  firstname
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="firstname"
                  autoComplete="firstname"
                  required
                  value={ firstname }
                  onChange={ (e) => setFirstname(e.target.value) }
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Firstname"
                />

              </div>
              <div>
                <label htmlFor="lastname" className="sr-only">
                  lastname
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="lastname"
                  autoComplete="Lastname"
                  required
                  value={ lastname }
                  onChange={ (e) => setLastname(e.target.value) }
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Lastname"
                />

              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value) }
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />

              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={ password }
                  onChange={ (e) => setPassword(e.target.value) }
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />

              </div>
            </div>
            { errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline">{ errorMessage }</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                </span>
              </div>
            ) }
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Have already an account?{ ' ' }
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Register;
