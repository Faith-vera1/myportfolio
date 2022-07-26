import React from 'react'
import {Link} from 'react-router-dom'
import resume from '../Images/IKPANTAN FAITH.C (1).pdf'


const Header = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
  <div className="container-fluid">
    <Link className="navbar-brand fst-itallic" to='/'>PORTFOLIO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link to='/' className='text-white nav-link'>
           <li>Home</li>
        </Link>
        <Link to='/About' className='text-white nav-link'> 
        <li>About</li>
        </Link>
        <Link to='/Contact' className='text-white nav-link'> 
        <li>Contact</li>
        </Link>
        <Link to='/Projects' className='text-white nav-link'> 
        <li>Projects</li>
        </Link>
        <li className="nav-item text-white nav-link'">
        <a href={resume} className='nav-item text-white nav-link' target='_blank' rel='_noreferrer'>My Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header