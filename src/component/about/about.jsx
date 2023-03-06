import React from 'react'
import './About.css';
import {FaAward} from 'react-icons/fa'
import {MdSportsEsports} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import ME from '../../assets/jonatanAbout.jpeg'
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
              <MdSportsEsports className='about__icon'/>
              <h5>Hobbies</h5>
              <small><ul>
                <li>bouldering climbing almost 3 Years</li>
                <li>Hiking in the State of Israel</li>
                <li>Running </li>
              </ul></small>
            </article>
            <article className='about__card'>
              <GiSkills className='about__icon'/>
              <h5>Skills</h5>
              <small>Frontend: html,CSS,JS,ejs <br /> Framework: React <br /> Backend: node.js,express,C,CPP,Python</small>
            </article> 
          </div>
          <br />
          <p>
          2nd Software engineering student. Specializing in the data science major. Experience in website and application development for almost a year. 
          Main technologies MERN stack. Looking for my next development challenge.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About