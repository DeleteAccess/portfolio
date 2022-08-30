import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>7+ Years Working Experience</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Cloud, SaaS, DaaS and Linux</small>
            </article>
          </div>

          <p>I want humanity to overcome the <a href="https://en.wikipedia.org/wiki/Great_Filter" target='_blank'>Great Filter</a>. 
          To ensure the prolonged existence of humankind I count on missions for sustainable life on planet Earth, space 
          exploration (let’s start with the Moon, Mars, Jupiter’s Europa and Venus) and even transhumanistic objectives.</p>
          <p>I’m very curious by nature and like to collaborate with good team players. I’m well-organized and spontaneous.
          I can easily adapt to new circumstances.</p>
          
          <article className='about__card'>
          <div className='about__content-sparetime'>
          <h4>spare time activities</h4>
          &#62; I read a lot<br/>
          &#62; play CTF <i>new!</i><br/>
          &#62; learn about computer systems
          </div>
          </article>
    
          <p>Favorite Book:  Philip K. Dick's<br /> <i>Do Androids Dream of Electric Sheep?</i></p>


          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About