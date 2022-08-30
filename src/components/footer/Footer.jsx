import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {RiGitlabFill} from 'react-icons/ri'
import {RiTwitterFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lucien Haeller</a>      

      <ul className='permalinks'>
        <li><a href="#" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://gitlab.com/DeleteAccess" target="_blank"><RiGitlabFill/></a>
        <a href="https://www.linkedin.com/in/lucien-haeller/" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/diveordelve" target="_blank"><RiTwitterFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lucien Haeller. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer