import React from 'react';

function Modal({onClose, currentProject}) {
    const {name,githubLink, deployedApplication, description, index } = currentProject

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src ={require(`../../assets/projectImage/${index}.jpg`)} 
          alt="current project" width="80%"/>
          <div>
              <ul>
              <li><a href={githubLink} >Github link</a></li>
              <li><a href={deployedApplication} >Deployed Application </a></li>
              </ul>
          </div>
          <p  className="modalDescription">
            {description}
          </p>
          <button onClick={onClose} type="button">
            Close
          </button>
        </div>
      </div>

    );
  }

  export default Modal; 