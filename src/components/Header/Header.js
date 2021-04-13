import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <ul>
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/register'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'>
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink to='/logs/new'>
            New Mood Log
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header;