import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i class='fa-regular fa-lightbulb-on'></i> Be for you
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='profiles.html'>Be for you</Link>
        </li>
        <li>
          <Link to='register.html'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
