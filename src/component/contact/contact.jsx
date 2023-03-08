import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c73lw43', 'template_63fc7v8', form.current, 'hyr-8ZGwksuEFCR29')
      .then((result) => {
          e.target.reset()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yoni13445@gmail.com</h5>
            <a href="mailto:yoni13445@gmail.com">Send me a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+972-546739263</h5>
            <a href="https://api.whatsapp.com/send?phone=+972-546739263" target='_blank'>Send me a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Visit at my feed in linkedin</h5>
            <a href="https://www.linkedin.com/in/jonatan-bouganim-36a048211/" target='_blank'>Get In</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact