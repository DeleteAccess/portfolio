import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {RiGitlabFill} from 'react-icons/ri'
import {RiTwitterFill} from 'react-icons/ri'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://gitlab.com/DeleteAccess" target="_blank"><RiGitlabFill/></a>
        <a href="https://www.linkedin.com/in/lucien-haeller/" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/diveordelve" target="_blank"><RiTwitterFill/></a>
    </div>
  )
}

export default HeaderSocials