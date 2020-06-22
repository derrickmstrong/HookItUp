import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserById = (props) => {
  const [user, setUser] = useState({});

  const getUserById = async () => {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${props.match.params.id}`
    );
    let userById = await res.json();
    setUser(userById);
  };

  useEffect(() => {
    getUserById();
    return () => {};
  }, []);  

  return (
    <div className='container my-5'>
      <h1>{user.name}</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p> 
      {/* In order to access an object inside a JSON object mimic the following... wrap state.object_name &&  in curly braces then access to the properties inside of the object - see below */}
      {user.address && (
        <p>
          {user.address.street} {user.address.suite}, <br />
          {user.address.city} {user.address.zipcode}
        </p>
      )}
      <Link to='/users' className='btn btn-primary'>
        Go Back
      </Link>
    </div>
  );
};

export default UserById;
