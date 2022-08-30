import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaLinkedin} from 'react-icons/fa'
import {RiTwitterFill} from 'react-icons/ri'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import {
  emailjsServiceID,
  emailjsTemplateID,
  emailjsPublicKey
} from '../../_CREDENTIALS.js'


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailjsServiceID, emailjsTemplateID, form.current, emailjsPublicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contact.haeller<br/>@gmail.com</h5>
            <a href="mailto:contact.haeller@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon'/>
            <h4>linkedIn</h4>
            <h5>lucien-haeller</h5>
            <a href="https://www.linkedin.com/in/lucien-haeller/" target="_blank">Let's connect</a>
          </article>
          <article className='contact__option'>
            <RiTwitterFill className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>diveordelve</h5>
            <a href="https://twitter.com/diveordelve" target="_blank">DM's open</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact