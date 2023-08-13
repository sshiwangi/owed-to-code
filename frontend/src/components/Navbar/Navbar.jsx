import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <section className="navbar">
        <nav>
            <div className="nav-menu-container">
            <Link to="/"> <strong> <span className="hugs"> Hugs </span> <span style={{color: 'black'}}> N </span> <span className="hopes"> Hopes</span></strong></Link>  
                <div className="nav-menu-items">
                    <div>About</div>
                    <div>How it Works?</div>
                    <div>Services</div>
                </div>
            </div>
            <div className="authentication">
            <Link to="/signin">Sign in</Link>
            </div>
        </nav>
    </section>
  )
}

export default Navbar