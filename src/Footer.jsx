/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
  return (
   
<footer className='footer'>
        <div className='headings'>
          <h2>Shortly</h2>
        </div>

        <div className='f1'>
          <h3>Features</h3>
          <a href='#'>Link shortening</a>
          <a href='#'>Branded Links</a>
          <a href='#'>Link shortening</a>
        </div>

        <div className='f2'>
          <h3>Resources</h3>
          <a href='#'>Blog</a>
          <a href='#'>Developers</a>
          <a href='#'>support</a>
        </div>

        <div className='f3'>
          <h3>Company</h3>
          <a href='#'>About</a>
          <a href='#'>Our Team</a>
          <a href='#'>Careers</a>
          <a href='#'>Contact</a>
        </div>

        <div className='icons'>
          <img src='/icon-facebook.svg' alt='' />
          <img src='/icon-twitter.svg' alt='' />
          <img src='/icon-instagram.svg' alt='' />
        </div>
      </footer>

  )
}

export default Footer