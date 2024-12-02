import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Sidebar() {
  return (
    <div>
      <div>
        <NavLink to={'/admin'}>Dashboard</NavLink>
      </div>
      <div>
        <NavLink to={'/admin/categories'}>Categories</NavLink>
      </div>
      <div>
        <NavLink to={'/admin/products'}>Products</NavLink>
      </div>
      <div>
        <NavLink to={'/admin/users'}>Users</NavLink>
      </div>
    </div>
  );
}
