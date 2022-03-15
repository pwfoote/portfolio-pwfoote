import React, { useState } from 'react';

function Portfolio(props) {

    const [projects] = useState([
        {
            name: 'budgetApp',
            githubLink: '',
            deployedApplication: '',
            description: 'PWA'

        },

        {
            name: 'fanBook',
            githubLink: '',
            deployedApplication: '',
            description: 'An App for Music Fans'

        },

        {
            name: 'mongoDB',
            githubLink: '',
            deployedApplication: '',
            description: 'A NoSQL Social Network API'

        },

        {
            name: 'profileGen',
            githubLink: '',
            deployedApplication: '',
            description: 'A Node.js Application'

        },

        {
            name: 'taskManager',
            githubLink: '',
            deployedApplication: '',
            description: 'PWA'

        },
       
    ])


    return (
            <section id="project">


        <h2>Projects</h2>
            {projects.map((project, index) =>(

                <div key={index}>
                    <h4>{project.name}</h4>
                    <img 
                    src={(`{../../assets/}${project.name}`)}
                    alt={project.description}
                    />
                </div>
            ))}

                 </section>

    )
}

export default Portfolio; 