import React from 'react'
import './hero.css'
import NavBar from '../navbar'

export default function Hero() {
  return (
    <div className='hero-img'>
        <NavBar/>
        <div className='hero-header'>
          <h1>SHARE YOUR HOLIDAY DREAM</h1>
          <p>And find the perfect partner to fullfill it</p>
          <button>Find your holiday partner</button>
        </div>
    </div>
  )
}
