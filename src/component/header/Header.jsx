import React from 'react'
import './Header.css'
import CTA from './CTA'
import profile from '../../assets/jonatanProfile.JPG'
import headerSocials from './headerSocials'
const Header = () => {
  return (
    
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jonatan bouganim</h1>
        <h5 className="text-light">2nd Software Engineering Student</h5>
        <CTA/>


        <div className="profile">
          <img src={profile} alt="profile"  />
        </div>
        
        <a href="#Contact" className='scroll_down'>Scroll Down</a>
      </div>
    
  )
}

export default Header