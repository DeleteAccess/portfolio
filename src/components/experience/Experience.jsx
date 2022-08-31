import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>   
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>CSS3</h4>
              </div>
            </article>                      
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>React</h4>
              </div>
            </article>    
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Node.js</h4>
              </div>
            </article>            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Python</h4>
              </div>
            </article>            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>SQL</h4>
              </div>
            </article>            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Java</h4>
              </div>
            </article>  
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Bash</h4>
              </div>
            </article>  
                                          
                  </div>

        </div>
        {/* END OF BACKEND */}
            {/* END OF BACKEND DEVELOPMENT */}
          
          <div>
            <h3>Collaborative Tools</h3>
            <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Jira</h4>
              </div>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Trello</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Miro</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Figma</h4>
              </div>
            </article>   
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Google Workspace</h4>
              </div>
            </article>                                
            </div>
          </div>
          </div>
          {/* END OF TOOLS */}
              
    </section>
  )
}

export default Experience