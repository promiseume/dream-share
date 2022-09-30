import React from 'react'
import './footer.css'
import BitMap from '../images/Bitmap.png'

export default function Footer() {
  return (
    <footer>
     <div className='dream-logo'><h2>DREAMSHARE</h2></div>
     <div className='about-company'>
      <p>Company</p>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Press</li>
        <li>Blog</li>
        <li>Terms and privacy</li>
        <li>Help</li>
      </ul>
     </div>
     <div className='partner'>
      <p>Partners</p>
     </div>
     <div className='designer'>
      <p>DESIGNED BY</p>
      <img src={BitMap} alt='bit map logo'/>
     </div>
      </footer>
  )
}
