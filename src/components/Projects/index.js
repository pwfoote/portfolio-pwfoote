import React, { useState } from 'react';
import budgetApp from '../../assets/projectImage/budgetApp.jpg'
import fanBook from '../../assets/projectImage/fanBook.jpg'
import mongoDB from '../../assets/projectImage/mongoDB.jpg'
import profileGen from '../../assets/projectImage/profileGen.gif'
import taskManager from '../../assets/projectImage/taskManager.jpg'
function Portfolio(props) {


    return (
        <div id="wrapper">
        <div className="m-2" id="profile-picture">
            <h3>Budget Tracker</h3>
            <img 
            src = {budgetApp}
            alt="Budget Managing App"
            >
            </img>
            <a href="https://thawing-ravine-75047.herokuapp.com/" target="_blank"><h3>Deployed</h3></a>
            <a href="https://github.com/pwfoote/saki-banner" target="_blank"><h3>Github</h3></a>
       </div>

       <div className="m-2" id="profile-picture">
           <h3>FanBook.com</h3>
            <img 
            src = {fanBook}
            alt="fanbook.com"
            >
            </img>
            <a href="https://pwfoote.github.io/FanBook.com/" target="_blank"><h3>Deployed</h3></a>
            <a href="https://github.com/pwfoote/FanBook.com" target="_blank"><h3>Github</h3></a>
       </div>

       <div className="m-2" id="profile-picture">
           <h3>Social Network Api</h3>
            <img 
            src = {mongoDB}
            alt="fanbook.com"
            >
            </img>
            <a href="https://drive.google.com/file/d/1EYgQ3JcmNZihMGZvcfIvlEaaMpXwifwp/view" target="_blank"><h3>Demo</h3></a>
            <a href="https://github.com/pwfoote/tender-foote" target="_blank"><h3>Github</h3></a>
       </div>

       <div className="m-2" id="profile-picture">
           <h3>Team Profile Generator</h3>
            <img 
            src = {profileGen}
            alt="Team Profile Generator"
            >
            </img>
            <a href="https://drive.google.com/file/d/135gPxdKob-fbagGz3DBwLtpvOg3IG8u0/view" target="_blank"><h3>Demo</h3></a>
            <a href="https://github.com/pwfoote/Team-Profile-Generator" target="_blank"><h3>Github</h3></a>
       </div>

       <div className="m-2" id="profile-picture">
           <h3>Daily Task Manager</h3>
            <img 
            src = {taskManager}
            alt="Task Manager App"
            >
            </img>
            <a href="https://pwfoote.github.io/daily-work-task-app/" target="_blank"><h3>Deployed</h3></a>
            <a href="https://github.com/pwfoote/daily-work-task-app" target="_blank"><h3>Github</h3></a>
       </div>

       </div>
       
       

    )
}

export default Portfolio; 