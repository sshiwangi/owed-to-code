import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
import img1 from '../../assets/home (3).png'
import img2 from '../../assets/home (4).png'
import img3 from '../../assets/home (5).png'

const Home = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="info">
          <h1>YOUR ADHD-FRIENDLY PRODUCTIVITY COMPANION</h1>
        </div>
        <div className="info">
          <p className='header-desc'>Empower Your Focus: A Productivity App for ADHD Warriors to Organize Tasks and Set Gentle Reminders</p>
        </div>
      </div>
      <div className="div-container">
        <div className="custom-div-1">
          <Link to="/task">
          <div className="img-container">
          {/* <img  className='home-img' src={img1} alt="" /> */}
          </div>
          
          <h2>Effortless Task Management </h2>
          <h3>Seamlessly create, organize, and manage tasks for a well-structured day.</h3>
          </Link>
        </div>
        <div className="custom-div-2">
          <h2>Timely Reminders</h2>
          <h3>Stay on top of your commitments with convenient reminders that ensure nothing slips through the cracks.</h3>
          {/* <img  className='home-img'src={img2} alt="" /> */}
        </div>
        <div className="custom-div-3">
          {/* <img className='home-img' src={img3} alt="" /> */}
          <h2>Enhance Focus</h2>
          <h3>AI-Powered Personal Assistant for Concise Understanding"</h3>


        </div>
      </div>
    </div>
  );
};

export default Home;


