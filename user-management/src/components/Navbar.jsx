import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white text-lg font-semibold">
          User Management
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;