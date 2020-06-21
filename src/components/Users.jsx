import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let user = await res.json();
    setUsers(user);
  };

  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  return users.map((user) => {
    return (
      <div key={user.id} className='container my-5'>
        <h1>{user.name}</h1>
        <Link to={`/users/${user.id}/details`} className='btn btn-primary'>
          See more
        </Link>
      </div>
    );
  });
};

export default Users;
