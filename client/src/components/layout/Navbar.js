import React from "react";

export const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='index.html'>
          <i class='fa-regular fa-lightbulb-on'></i> Be for you
        </a>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Be for you</a>
        </li>
        <li>
          <a href='register.html'>Register</a>
        </li>
        <li>
          <a href='login.html'>Login</a>
        </li>
      </ul>
    </nav>
  );
};
