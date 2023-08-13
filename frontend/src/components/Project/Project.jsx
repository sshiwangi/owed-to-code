import React from "react";
import crossIcon from "../../assets/Close.png";
import bellIcon from "../../assets/Alarm.png";
import './project.css'

function Project() {
  return (
    <div className="create-project-container">
      <div className="cross-icon-container">
        <img height="30px" src={crossIcon} alt="" />
      </div>
      <form action="">
        <h3>Name</h3>
        <input type="text" name="name" id="name" placeholder="Drink Water" />

        <h3>Label</h3>
        <input type="text" name="health" id="health" placeholder="Health" />
        <h3>Description</h3>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Describe"
        />
        <div className="reminder-button">
          Set Reminder
          <img style={{marginLeft: '0.6rem'}} height="30px" src={bellIcon} alt="" />
        </div>
        <button type="submit">Done</button>
      </form>
    </div>
  );
}

export default Project;
