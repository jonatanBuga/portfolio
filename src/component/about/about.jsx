import React from 'react'
import './About.css';
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiSkills} from 'react-icons/gi'
import {ME} from '../../assets/jontanabout.JPG'
const About = () => {
  return (
    <section id='About'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__contact">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiens</h5>
              <small>1 Year Freelancer Web Developer</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>
            <article className='about__card'>
              <GiSkills className='about__icon'/>
              <h5>Skills</h5>
              <small>Frontend: html,CSS,JS,ejs <br /> Framework: React <br /> Backend: node.js,express,C,Python</small>
            </article> 
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam, autem repellendus deleniti minima nobis, beatae et exercitationem odio quos mollitia dicta accusamus sunt? Ab vitae temporibus dolorum ullam ut?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About