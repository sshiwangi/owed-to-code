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
          <img  className='home-img' src={img1} alt="" />
          </div>
          
          <h4>Effortless Task Management </h4>
          <p>Seamlessly create, organize, and manage tasks for a well-structured day.</p>
          </Link>
        </div>
        <div className="custom-div-2">
          <h4>Timely Reminders</h4>
          <p>Stay on top of your commitments with convenient reminders that ensure nothing slips through the cracks.</p>
          <img  className='home-img'src={img2} alt="" />
        </div>
        <div className="custom-div-3">
          <img className='home-img' src={img3} alt="" />
          <h4>Enhance Focus</h4>
          <p>AI-Powered Personal Assistant for Concise Understanding"</p>
        </div>
      </div>
    </div>
  );
};
export default Home;


