import React from 'react'
import { NavLink } from 'react-router-dom'
import dp from '../Images/IMG_0715.jpg'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Projects from '../Components/Projects'



const Home = () => {
  return (
    <div>
      <section className='container'>

        <div className='row'>
          <div className='col-md-5'>
            <h1 className='display-5 mb-4'>I am a Full-Stack Developer <br/>Ikpantan Faith</h1>
            <p className='lead mb-4'>

            Interested in buiding impactful web applications. Comfortable embracing new 
            challenges,unforseen responsibilities and managing multiple projecst as team 
            priorities realign.Built and implemented successful front and back-end 
            web applications that have become critical
            tools for clients and teams.


            </p>
            <NavLink className='btn btn-outline-primary  me-4' to='./Contact' role= 'button'>Get Started</NavLink>
            <NavLink className='btn btn-outline-primary ' to='./about' role= 'button'></NavLink>
          </div>

          <div className='col-md-7 d-flex justify-content-center align-items-center'>
            <img src={dp}  alt='display' height='300px' width='300px'/>
          </div>

        </div>
      </section>
      <About/>
      <Contact/>
      <Projects/>

    </div>
  )
}

export default Home