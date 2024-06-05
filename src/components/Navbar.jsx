import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logout from '../pages/Logout'; 

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Add any logo or branding here if needed */ }
            </div>
            <div>
              
              <Link
                to='/register'
                className={ `text-white px-4 py-2 rounded ${ location.pathname === '/register' ? 'bg-gray-700' : 'hover:bg-gray-700' }` }
              >
                Register
              </Link>
              <Link
                to='/login'
                className={ `text-white px-4 py-2 rounded ${ location.pathname === '/login' ? 'bg-gray-700' : 'hover:bg-gray-700' }` }
              >
                Login
              </Link>
              { location.pathname === '/dashboard' && <Logout /> } 
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
