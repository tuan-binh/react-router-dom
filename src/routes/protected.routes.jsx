import AdminIndex from '../pages/admin';
import Dashboard from '../pages/admin/dashboard';
import ManageCategory from '../pages/admin/category';
import ManageProduct from '../pages/admin/product';
import ManageUser from '../pages/admin/user';
import { Outlet } from 'react-router-dom';
import UserDetail from '../pages/admin/user/UserDetail';
import UserDetailIndex from '../pages/admin/user/UserDetailIndex';

const protectedRoutes = [
  {
    path: '/admin',
    element: <AdminIndex />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'categories',
        element: <ManageCategory />,
      },
      {
        path: 'products',
        element: <ManageProduct />,
      },
      {
        path: 'users',
        element: <UserDetailIndex />,
        children: [
          {
            path: '',
            element: <ManageUser />,
          },
          {
            path: ':userId',
            element: <UserDetail />,
          },
        ],
      },
    ],
  },
];

export default protectedRoutes;
