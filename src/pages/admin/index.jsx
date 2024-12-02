import Navbar from '../../layouts/admin/navbar';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Sidebar from '../../layouts/admin/side-bar';

export default function AdminIndex() {
  return (
    <div className="flex h-screen">
      <div className="w-[25%] bg-cyan-900">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
