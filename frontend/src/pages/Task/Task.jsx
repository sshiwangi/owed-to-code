import React, {useState} from 'react'
import './task.css'
import plusIcon from '../../assets/Plus Math.png'
import NoProject from '../../components/Noproject/NoProject'
import Project from '../../components/Project/Project'
import Projects from '../../components/ProjectList/Projects'

function Task() {
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleButtonClick = () => {
        setShowNewComponent(true);
    }
  return (
    <div className="task-list-container">
        <div className="sidebar">
            <div onClick={handleButtonClick} className="project-container">
                Create Task
                <img style={{marginLeft: '0.6rem'}} height="30px" src={plusIcon} alt="" />
            
            </div>
            <Projects/>
        </div>
        <div className="main-container">
            {showNewComponent ? <Project /> : <NoProject />}
        </div>
    </div>
  )
}

export default Task