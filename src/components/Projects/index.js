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
            description: ''

        },
       
    ])


    return (
            <section id="portfolio">



            {projects.map((project, index) =>(

                <div key={index}>
                    <h3>{project.name}</h3>
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