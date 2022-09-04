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

          <p>I want hu&#xAD;man&#xAD;ity to over&#xAD;come the <a href="https://en.wikipedia.org/wiki/Great_Filter" target='_blank'>Great Filter</a>. 
          To ensure the pro&#xAD;longed existence of human&#xAD;kind I count on missions for sus&#xAD;tain&#xAD;a&#xAD;ble life on planet Earth, space 
          ex&#xAD;plo&#xAD;ra&#xAD;tion (let’s start with the Moon, Mars, Jupiter’s Eu&#xAD;ro&#xAD;pa and Ve&#xAD;nus) and e&#xAD;ven trans&#xAD;human&#xAD;istic objec&#xAD;tives.</p>
          <p>I’m very cu&#xAD;ri&#xAD;ous by na&#xAD;ture and like to col&#xAD;lab&#xAD;o&#xAD;rate with good team play&#xAD;ers. I’m well-or&#xAD;gan&#xAD;ized and spon&#xAD;ta&#xAD;ne&#xAD;ous.
          I can eas&#xAD;i&#xAD;ly a&#xAD;dapt to new cir&#xAD;cum&#xAD;stanc&#xAD;es.</p>
          
          <article className='about__card'>
          <div className='about__content-sparetime'>
          <h4>spare time activities</h4>
          &#62; I read a lot <br/>
          &#62; play CTF and other games <br/>
          &#62; learn about computers and networks
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