import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      
      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experiens">Experiens</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/yhonatan.bouganim" target='_blank'><FaFacebookSquare/></a>
        <a href="https://github.com/jonatanBuga" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/jonatan-bouganim-36a048211" target='_blank'><FaLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Made by Jonatan Bouganim</small>
      </div>
    </footer>
  )
}

export default Footer