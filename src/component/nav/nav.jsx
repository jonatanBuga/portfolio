import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav className='navbar'>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#About" onClick={()=>setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Experiens" onClick={()=>setActiveNav('#Experiens')} className={activeNav === '#Experiens' ? 'active' : ''}><BiBook/></a>
      <a href="#Portfolio" onClick={()=>setActiveNav('#Portfolio')} className={activeNav === '#Portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#Contact" onClick={()=>setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav