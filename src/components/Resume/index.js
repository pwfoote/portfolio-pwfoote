import React from "react";

function Resume() {

    return (
        <section id="resume">
            <div id ="wrapper"className="my-4">
              <div>
            <h1>Resume</h1>
            <span className="m-3">
            <h3><a href="https://docs.google.com/document/d/1FAh-U27P18IM2MyiUUZfH7C1tKHUXt1t/edit" target="_blank"> 
            You Can View My Resume Here</a></h3>
            </span>
            </div>

         </div>
         <div id ="wrapper" className="my-4">
              <div>

            <h3> Front-end Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            </div>
         </div>


         <div id ="wrapper" className="my-4">
              <div>
            <h3> Back-end Skills</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                
            </ul>
            </div>
         </div>
        </section>
    )
}

export default Resume; 