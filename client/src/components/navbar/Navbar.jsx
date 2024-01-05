import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBarChart, FiLogOut } from 'react-icons/fi';

function Navbar() {
  const location = useLocation();

  const isLinkSelected = (link) => {
    return location.pathname === link;
  };

  return (
    <div className='flex p-5 flex-col bg-white h-full'>
      <h1 className='text-2xl text-blue-900 font-bold p-4'>Nyka Dashboard</h1>
      <div className='flex flex-col gap-1 p-4 rounded h-full'>
        <Link to={"/"} className={`flex items-center text-lg ${isLinkSelected('/') ? 'text-blue-500' : 'text-black'} hover:text-blue-700`}>
          <FiHome className="mr-2" />
          <span>Dashboard</span>
        </Link>
        <Link to={"/analytics"} className={`flex items-center text-lg ${isLinkSelected('/analytics') ? 'text-blue-500' : 'text-black'} hover:text-blue-700`}>
          <FiBarChart className="mr-2" />
          <span>Analytics</span>
        </Link>
        <Link to={"/logout"} className={`flex items-center text-lg ${isLinkSelected('/logout') ? 'text-blue-500' : 'text-black'} hover:text-blue-700`}>
          <FiLogOut className="mr-2" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
