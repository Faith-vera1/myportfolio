import React from 'react'
import pics from '../Images/IMG_0715.jpg'

const About = () => {
  return (
    <div>

        <section className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center py-4'></div>
                    <h1>About</h1>
                    <br/>

                </div>

            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <img src={pics} alt='display picture' width='300px' height='300px'/>

                    </div>
                </div>
            </div>

            <div className='row'>
          <div className='col-md-5'>
            <h1 className='display-5 mb-4'>Iam a Full-Stack Developer <br/>Ikpantan Faith</h1>
            <p className='lead mb-4'>

            Interested in buiding impactful web applications. Comfortable embracing new 
            challenges,unforseen responsibilities and managing multiple projecst as team 
            priorities realign.Built and implemented successful front and back-end 
            web applications that have become critical
            tools for clients and teams.


            </p>
            </div>
            <h1>My Skills 
            </h1>

            <div class="progress">
  <div className="progress-bar my-4" role="progressbar" aria-valuenow="0"
   aria-valuemin="0" aria-valuemax="100">HTML<span className='pro'>90%</span>
   </div>
</div>
<div className="progress">
  <div className="progress-bar my-4" role="progressbar" style={{ width: "90%" }} 
  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">CSS
        <span className='pro'>90%</span>
    
  </div>
  <div className="progress">
  <div className="progress-bar my-4" role="progressbar" style={{ width: "85%" }} 
  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Bootstrap
        <span className='pro'>85%</span>
    
  </div>
</div>
</div>
<div className="progress">
  <div className="progress-bar my-4" role="progressbar" style={{ width: "85%" }} 
  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">JavaScript
        <span className='pro'>80%</span>
    
  </div>
  <div className="progress">
  <div className="progress-bar my-4" role="progressbar" style={{ width: "95%" }} 
  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">GIT
        <span className='pro'>95%</span>
    
  </div>
</div>
<div className="progress">
  <div className="progress-bar my-4" role="progressbar" style={{ width: "85%" }} 
  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">npm
        <span className='pro'>85%</span>
    
  </div>
</div>
</div>
<div className="progress">
  <div className="progress-bar my-4" role="progressbar" style={{width: "80%"}} 
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">REACT
            <span className='pro'>80%</span>
  </div>
</div>
<div className="progress">
  <div className="progress-bar my-4" role="progressbar" style={{ width: "70%" }} 
  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">NODE.JS
        <span className='pro'>70%</span>
    
  </div>
</div>
<div className="progress">
  <div className="progress-bar my-4" role="progressbar" style={{width: "65%"}}
   aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">express
      <span className='pro'>65%</span> </div>
</div>
<div className="progress">
  <div className="progress-bar my-4" role="progressbar" style={{width: "60%"}}
  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">mongoDB
  <span className='pro'>60%</span></div>
</div>
           <div/>

        </div>


        </section>
    </div>
  )
}

export default About