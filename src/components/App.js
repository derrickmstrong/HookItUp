import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post.jsx';
import PostById from './PostById.jsx';
import Users from './Users.jsx';
import UserById from './UserById.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <div className='d-flex justify-content-center mx-3'>
          <Link to='/' className='btn btn-primary m-4'>
            Home
          </Link>
          <Link to='/posts' className='btn btn-primary m-4'>
            Post
          </Link>
          <Link to='/users' className='btn btn-primary m-4'>
            Users
          </Link>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={Post} />
          <Route path='/posts/:id/details' component={PostById} />
          <Route exact path='/users' component={Users} />
          <Route path='/users/:id/details' component={UserById} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
