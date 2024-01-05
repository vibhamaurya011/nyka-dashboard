import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex flex-col bg-white gap-3'>
      <h1 className='text-2xl font-bold'>Nyka Dashboard</h1>
      <div className='flex flex-col gap-1 p-4 rounded'>
        <Link to={"/"} className='text-blue-500 hover:text-blue-700'>Dashboard</Link>
        <Link to={"/analytics"} className='text-blue-500 hover:text-blue-700'>Analytics</Link>
        <Link to={"/logout"} className='text-blue-500 hover:text-blue-700'>Logout</Link>
      </div>
    </div>
  )
}

export default Navbar;
