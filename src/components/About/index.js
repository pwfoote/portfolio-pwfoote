import React from 'react';
import Profile from '../../assets/projectImage/cover-image.jpg'
//import picture from the previous passport. create a "assets" directory to save it as indicated below
//import profilePicture from '../../assets/profile/profile-picture.jpg';
//<img src={profilePicture} className="my-2" style={{ width: "100%" }} alt="profile" />
function About() {
    return(
        <section id="about">
        
            <h1> About me </h1>


            <div id="wrapper">
               <div className="m-2" id="profile-picture">
                   <img 
                   src = {Profile}
                   alt="profile picture"
                   >
                   </img>
              </div>

        <p>
            BIO TEXT
        </p>

    </div>
    </section>
    )
}

export default About; 