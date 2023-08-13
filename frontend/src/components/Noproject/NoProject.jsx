import React from 'react'
import noTask from '../../assets/notask.png'
import './noproject.css'

function NoProject() {
  return (
    <div className="no-project-container">
        <img src={noTask} alt="nothing to show" />
            No project yet
    </div>
  )
}

export default NoProject