/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FcMenu } from 'react-icons/fc';

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <p>Shortly</p>
        <a href='#'>Featured</a>
        <a href='#'>Pricing</a>
        <a href='#'>Resourses</a>
        <FcMenu size={40} />
        <a href='#' className='login'>
          Login
        </a>
        <a href='#'>Sign up</a>
      </header>

      <nav className='mobile-nav'>
        <a href='#'>Featured</a>
        <a href='#'>Pricing</a>
        <a href='#'>Resourses</a>
        <a href='#' className='login'>
          Login{' '}
        </a>
        <a href='#'>Sign up</a>
      </nav>
    </>
  );
};

export default Navbar;
