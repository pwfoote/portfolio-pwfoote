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
           Hello There! My name is Preston and I am a current student for Michigan State University Coding Bootcamp. I decided to take the dive into Full Stack Web Development so i could combine my interest of Design and Technology. While this class has been challenging, thanks to support from friends, family and classmates, I have finally made it to the end!
        
            Through out this course I have learned primary foundational skills to continue as a Full Stack Developer, but still have a lot to learn! 

            Transitioning from the Service Industry, I am bringing the skills that helped me master TeamWork, Problem Solving and Customer Service to perfect in the Tech Industry.
        
        </p>

    </div>
    </section>
    )
}

export default About; 