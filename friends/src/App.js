import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriendsForm from './components/AddFriendForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friendslist'>Friends</Link>
          </li>
          <li>
            <Link to='/addfriendsform'>Add a New Friend!</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path='/friendslist' component={FriendsList} />
          <PrivateRoute path='/addfriendsform' component={AddFriendsForm} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
