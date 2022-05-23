/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { FcMenu } from 'react-icons/fc';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className='header'>
        <p>Shortly</p>
        <a href='#'>Featured</a>
        <a href='#'>Pricing</a>
        <a href='#'>Resourses</a>
        <FcMenu className='nav-icon'
          size={40}
          onClick={() => {
            setShow(!show);
          }}
        />
        <a href='#' className='login'>
          Login
        </a>
        <a href='#'>Sign up</a>
      </header>

      {show && (
        <nav className='mobile-nav'>
          <a href='#'>Featured</a>
          <a href='#'>Pricing</a>
          <a href='#'>Resourses</a>
          <a href='#' className='login'>
            Login{' '}
          </a>
          <a href='#'>Sign up</a>
        </nav>
      )}
    </>
  );
};

export default Navbar;
