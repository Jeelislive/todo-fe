import React from 'react';
import App from './../App';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-xl rounded-lg shadow-lg p-8 bg-white">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Our App!</h1>
          <p className="text-gray-600 mb-8">
            This is the homepage of Todo App. Explore it. Either you have to Login or Register to use todo App.
            Make your Todo's Now ..
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link to='/login'>Get Started</Link> 
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;