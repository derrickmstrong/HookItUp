import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let post = await res.json();
    setPosts(post);
  };

  useEffect(() => {
    getPost();
    return () => {};
  }, []);

  return posts.map((post) => {
    return (
      <div key={post.id} className='container my-5'>
        <h1>{post.title}</h1>
        <Link to={`/posts/${post.id}/details`} className='btn btn-primary'>
          See more
        </Link>
      </div>
    );
  });
};

export default Post;
