
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4"> 
      <div className="container mx-auto flex justify-between">
        <div className="text-white">
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/about" className="mx-2">About Us</Link>
          <Link to="/contact" className="mx-2">Contact Us</Link>
          <Link to="/admin" className="mx-2">Admin</Link>
        </div>
        <div className="text-white">
          <Link to="/animals/cat" className="mx-2">Cats</Link>
          <Link to="/animals/dog" className="mx-2">Dogs</Link>
          <Link to="/animals/bird" className="mx-2">Birds</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


