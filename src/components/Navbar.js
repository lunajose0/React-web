import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          <img src='/picture/logo.png' style={{ width: 50, borderRadius: '15px' }} alt='Logo' />
        </h1>
        <div>
          <Link to="/" className="text-white mr-4 transition duration-300 hover:text-gray-300 rounded-md px-3 py-1 hover:bg-gray-700">
            Inicio
          </Link>
          <Link to="/servicios" className="text-white mr-4 transition duration-300 hover:text-gray-300 rounded-md px-3 py-1 hover:bg-gray-700">
            Servicios
          </Link>
          <Link to="/acerca" className="text-white mr-4 transition duration-300 hover:text-gray-300 rounded-md px-3 py-1 hover:bg-gray-700">
            Acerca de
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
