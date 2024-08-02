import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const page = window.location.pathname.split('/')[1];
  return (
    <div>
      <Navbar page={page} />
      <Outlet />
    </div>
  );
};
