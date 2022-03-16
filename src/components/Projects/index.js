import React, { useState } from 'react';


function Portfolio(props) {


    const [githubLink] = useState();


    const [projects] = useState([
        {
            name: 'Budget App',
            githubLink: 'https://github.com/pwfoote/saki-banner',
            deployedApplication: 'https://thawing-ravine-75047.herokuapp.com/',
            description: 'Progressive Web App'

        },

        {
            name: 'FanBook',
            githubLink: 'https://github.com/pwfoote/FanBook.com',
            deployedApplication: '',
            description: 'An App for Music Fans'

        },

        {
            name: 'Social Network API',
            githubLink: 'https://github.com/pwfoote/tender-foote',
            deployedApplication: 'https://drive.google.com/file/d/1EYgQ3JcmNZihMGZvcfIvlEaaMpXwifwp/view',
            description: 'A NoSQL Social Network API'

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
                
                 <h1>Projects</h1>
                 <div id="wrapper">

       
            {projects.map((project, index) =>(

                <div key={index}>
                    <h4>{project.name}</h4>
                    <img 
                    src={(`{../../assets/projectImage}${project.img}`)}
                    alt={project.description}
                    className="img-thumbnail"
                    key={project.name}
                    href={githubLink} 
                    />
                     
                </div>
            ))}
                </div>
                 </section>

    )
}

export default Portfolio; 