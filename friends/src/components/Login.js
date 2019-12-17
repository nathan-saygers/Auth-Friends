import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  const [ credentials, setCredentials] = useState({ username: "", password: "" })
  const [ isFetching, setIsFetching] = useState(false);

  const handleChanges = event => {
    setCredentials(
      {...credentials, [event.target.name]: event.target.value}
    )
    console.log('new credentials from login component', credentials);
  }

  const login = event => {
    event.preventDefault();
    setIsFetching(true);
    axiosWithAuth()
      .post('/login', credentials)
      .then(response => {
        localStorage.setItem('token', response.data.payload);
        
      })
      .catch(err=> console.log(err));
  }

  return (
    <form onSubmit={login}>
      <input 
        type="username" 
        name="username" 
        placeholder="username"
        value={credentials.username} 
        onChange={handleChanges} 
        />
      <input 
        type="password" 
        name="password"
        placeholder="password"
        value={credentials.password} 
        onChange={handleChanges}/>
      <button>Log In</button>{isFetching && 'logging in'}
    </form>
  )
}

export default Login;