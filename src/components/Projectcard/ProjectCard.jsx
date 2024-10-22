import React from 'react';
import './projectcard.css'; 

export const ProjectCard = ({ logo, name, description, logoStyle, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="project-card"> 
      <img src={logo} alt={name} style={logoStyle} />
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;

