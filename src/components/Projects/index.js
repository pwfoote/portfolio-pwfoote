import React, { useState } from 'react';
import Modal from '../Modal';
import Profile from '../../assets/projectImage/budgetApp.jpg'

function Portfolio(props) {


    const [currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [projects] = useState([
        {
            name: 'Budget App',
            githubLink: 'https://github.com/pwfoote/saki-banner',
            deployedApplication: 'https://thawing-ravine-75047.herokuapp.com/',
            description: 'Progressive Web App'

        },

        {
            name: 'FanBook',
            githubLink: '',
            deployedApplication: '',
            description: 'An App for Music Fans'

        },

        {
            name: 'Social Network Api',
            githubLink: '',
            deployedApplication: '',
            description: 'A NoSQL Social Network API'

        },

        {
            name: 'Task',
            githubLink: '',
            deployedApplication: '',
            description: 'PWA'

        },
       
    ])

    const toggleModal = (project, index) => {
           setCurrentProject({ ...project, index: index})
           setIsModalOpen(!isModalOpen);
    }

    return (
        <div id="wrapper">
        <div className="m-2" id="profile-picture">
            <img 
            src = {Profile}
            alt="profile picture"
            >
            </img>
       </div>
       </div>

    )
}

export default Portfolio; 