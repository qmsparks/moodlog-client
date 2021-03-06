import { useState } from 'react';

import AuthModel from '../models/AuthModel';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    AuthModel.login({email, password})
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('uid', response.signedJwt);
        } else {
          // TODO handle login errors here
        }
      })
  }

  return (
    <div>
      <h2>Log In</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input 
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  )

}

export default Login;