import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import Analytics from '../pages/analytics/Analytics';

function MainRoute() { 
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/analytics' element={<Analytics />} />
    </Routes>
  );
}

export default MainRoute; 
