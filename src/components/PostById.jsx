import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostById = (props) => {
  const [post, setPost] = useState({});

  const getPostById = async () => {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
    );
    let postbyid = await res.json();
    setPost(postbyid);
  };

  useEffect(() => {
    getPostById();
    return () => {};
  }, []);

  return (
    <div className='container my-5'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to='/posts' className='btn btn-primary'>
        Go Back
      </Link>
    </div>
  );
};

export default PostById;
