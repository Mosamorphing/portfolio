import React from 'react';
import './works.css'; // importing CSS specific to the Works section
import ProjectCard from '../Projectcard/ProjectCard';
import wtflogo from '../../../public/wtf.png';
import multisight from '../../../public/multisight.png';
import ts from '../../../public/ts.png';
import pdao from '../../../public/pdao.png';
 // importing ProjectCard component

export const Works = () => {
  const projects = [
    {
      logo: multisight, // Use the imported logo here
      name: 'Multisight',
      description: 'A repository of information on Multisignature wallets', // Comma added here
      logoStyle: { width: '50px', height: '50px' }, // Specific dimensions for project 1
    },
    {
        logo: wtflogo,
        name: 'WTF Academy (Africa)',
        description: 'An Open Source University for talents to get onchain ',
        logoStyle: { width: '83px', height: '33px', margin: '10px 0px' }, // Specific dimensions for project 2
      },
    {
      logo: 'pdao.png', // replace with actual logo path
      name: 'PeopleDAO',
      description: 'A metaDAO incubating public good projects for the people',
      logoStyle: { width: '49px', height: '49px' },
    },    
    {
        logo: 'ts.png', // replace with actual logo path
        name: 'TechSemester',
        description: 'A marketplace for tech enthusiats and digital creators',
        logoStyle: { width: '50px', height: '50px' }, // Specific dimensions for project 1
    },
  ];

  return (
    <section id="works">
      <h2 className='workstitle'>Portfolio</h2>
      <span className="workDesc">These are some of the projects I've actively contributed to over the last 24 months</span>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            logo={project.logo} 
            name={project.name} 
            description={project.description} 
            logoStyle={project.logoStyle}
          />
        ))}
      </div>
    </section>
  );
}

export default Works;
