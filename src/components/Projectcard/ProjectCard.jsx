import React from 'react';
import './projectcard.css'; // Import CSS specific to ProjectCard component

export const ProjectCard = ({ logo, name, description, logoStyle }) => {
  return (
    <div className="project-card">
      <img src={logo} alt={name} style={logoStyle}/>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
