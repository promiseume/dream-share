import React from 'react'
import './navbar.css';

export default function Nav() {
  return (
    <nav className='navbar'>
        <a className="navbar-brand" href='/'>DREAMSHARE</a>
        <div className='nav-item'>
            <a href='/'>Log in</a>
            <a href='/'>Sign up</a>
        </div>
    </nav>
  )
}
