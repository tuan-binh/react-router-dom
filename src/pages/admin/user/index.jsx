import { Link } from 'react-router-dom';
import React from 'react';

export default function ManageUser() {
  const users = [
    {
      id: 1,
      name: 'Yến Tích Chu',
      age: 26,
    },
    {
      id: 2,
      name: 'Hưởng NC',
      age: 26,
    },
    {
      id: 3,
      name: 'Linh',
      age: 26,
    },
    {
      id: 4,
      name: 'Huỳnh Penis',
      age: 26,
    },
    {
      id: 5,
      name: 'Tạc tượng',
      age: 26,
    },
  ];

  return (
    <div>
      {users.map((item) => (
        <p>
          <Link to={`/admin/users/${item.id}`}>{item.name}</Link>
        </p>
      ))}
    </div>
  );
}
