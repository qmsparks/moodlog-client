import { useState } from 'react';

import AuthModel from '../models/AuthModel';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    AuthModel.register({name, email, password})
      .then(response => {
        if (response.status === 201) {
          AuthModel.login({email, password})
            .then(response => {
              localStorage.setItem('uid', response.signedJwt);
            })
        } else {
          // TODO handle registration errors here
        }
      })
  }

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        />

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

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;