import React from 'react'
import './Experiens.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experiens = () => {
  return (
    <section id='Experiens'>
      
        <h5>What's Skills I have </h5>
        <h2> My Experiens</h2>
      
      

      <div className="container experiens__container">
        <div className="experiens__frontend">
          <h2>Frontend development</h2>
          <div className="experience__contact">
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>JavaScript</h3>
                <small className='text-light'>high level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>React </h3>
                <small className='text-light'>high level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>HTML 5</h3>
                <small className='text-light'>high level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>CSS</h3>
                <small className='text-light'>high level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>bootstrap 5</h3>
                <small className='text-light'>Experiens</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experiens__backend">
          <h2>Backend development</h2>
          <div className="experience__contact">
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>Node.js</h3>
                <small className='text-light'>high level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>Python</h3>
                <small className='text-light'>high level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>CPP</h3>
                <small className='text-light'>high level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>OOP</h3>
                <small className='text-light'>high level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>Mongodb</h3>
                <small className='text-light'>high level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h3>Express</h3>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiens