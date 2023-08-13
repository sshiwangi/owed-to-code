import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="info">
          <h1>HEALTH INFO IN ONE APP</h1>
        </div>
        <div className="info">
          <p>Doctors, Medicines, Lab-tests
          All in one Service, 24/7 Availability</p>
          <p>See details..</p>
        </div>
      </div>
      <div className="div-container">
        <div className="custom-div-1">
          <p>There is a little fatigue, but in general i feel good.</p>
          <div className="moods">
            <div className="mood-circle-1"></div>
            .mood-circle-2
          </div>
        </div>
        <div className="custom-div-2">
          <p>What Symptoms are troubling you today?</p>
        </div>
        <div className="custom-div-3">
          <p>App Store Rating</p>
        <h3>4.9</h3>


        </div>
      </div>
    </div>
  );
};

export default Home;


