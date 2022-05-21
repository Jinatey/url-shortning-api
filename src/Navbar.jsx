import React from 'react';

const Navbar = () => {
  return (
    <header className='header'>
      <p>Shortly</p>
      <a href='#'>Featured</a>
      <a href='#'>Pricing</a>
      <a href='#'>Resourses</a>
      <a href='#' className='login'>
        Login
      </a>
      <a href='#'>Sign up</a>
    </header>
  );
};

export default Navbar;
