import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio3.png'
const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG1} alt="" />
          </div>
          <p>WorkSami is a Searching job platform for Sami Shamoon Collage's students and graduetors. 
            The website is here to help students and graduetors of Sami Shamoon Collage to find their first job in the industry. 
            Founders : Jonatan Buganim, Lidor Feldman, Itay Ventura and Tal Elzam(Ceo Of OfakimTech)</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG3} alt="" />
          </div>
          <p>A portfolio page, a small summary about myself, 
            projects I have done over time and qualities that I bring with me. 
            For a short tour of the site, click on the live demo button</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio