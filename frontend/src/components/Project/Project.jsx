import React, {useState} from "react";
import crossIcon from "../../assets/Close.png";
import bellIcon from "../../assets/Alarm.png";
import axios from "axios";
import './project.css'

function Project() {
    const [taskName, setTaskName] = useState('');
    const [taskLabel, setTaskLabel] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    }
    const handleTaskLabel = (event) => {
        setTaskLabel(event.target.value);
      };
    const handleTaskDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        const taskData = {
            name: taskName,
            label: taskLabel,
            description: taskDescription,
          };
        
          try {
            // Send POST request using axios to your backend API
            const response = await axios.post('routes/task', taskData);

            if (response.status === 201) {
                console.log('Task added successfully.');
                // You can update the UI or reset the form here
            } else {
                console.log('Failed to add task.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setTaskName('');
    setTaskLabel('');
    setTaskDescription('');
      }
    
  return (
    <div className="create-project-container">
      <div className="cross-icon-container">
        <img height="30px" src={crossIcon} alt="" />
      </div>
      <form onSubmit={handleSubmit} action="">
        <h3>Name</h3>
        <input value={taskName} onChange={handleTaskNameChange} type="text" name="name" id="name" placeholder="Drink Water" />

        <h3>Label</h3>
        <input value={taskLabel} onChange={handleTaskLabel} type="text" name="health" id="health" placeholder="Health" />
        <h3>Description</h3>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Describe"
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
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
