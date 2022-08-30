import React from 'react'
import './portfolio.css'
import {
  data
} from '../../portfolio-data.js'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, name, customer, description, techstack, link}) => {
            return(
              <article key={id} className='portfolio__item'>
             
                <h3>{name}</h3>
                <p className='portfolio__customername'><i>{customer}</i></p>
                <p>{description}</p>
                <div className='portfolio__techstack'>
                
                {techstack.map(tech => {
                  return (<div className='portfolio__technology'>{tech}</div>)                  
                })}           
                 </div>
                
                <div className="portfolio__item-cta">
                  <a href={link} className={link ? 'btn' : 'hidden'} target='_blank'>visit</a>
 
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio