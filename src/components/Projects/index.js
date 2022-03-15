import React, { useState } from 'react';
import Modal from '../Modal';

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
            name: 'Social Ne',
            githubLink: '',
            deployedApplication: '',
            description: 'A NoSQL Social Network API'

        },

        {
            name: 'taskManager',
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
            <section id="project">
                {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
                 <h1>Projects</h1>
                 <div id="wrapper">

       
            {projects.map((project, index) =>(

                <div key={index}>
                    <h4>{project.name}</h4>
                    <img 
                    src={(`{../../assets/projectImage}${project.img}`)}
                    alt={project.description}
                    className="img-thumbnail"
                    onClick={() => toggleModal(project,index)}
                    key={project.name}
                    />
                </div>
            ))}
                </div>
                 </section>

    )
}

export default Portfolio; 