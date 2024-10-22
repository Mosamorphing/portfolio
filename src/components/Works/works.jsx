import React from 'react';
import './works.css'; 
import ProjectCard from '../Projectcard/ProjectCard';
import wtflogo from '../../../public/wtf.png';
import multisight from '../../../public/multisight.png';
import ts from '../../../public/ts.png';
import pdao from '../../../public/pdao.png';

export const Works = () => {
  const projects = [
    {
      logo: multisight,
      name: 'Multisight',
      description: 'A repository of information on Multisignature wallets',
      logoStyle: { width: '50px', height: '50px' },
      url: 'https://multisight.app/', 
    },
    {
      logo: wtflogo,
      name: 'WTF Academy (Africa)',
      description: 'An Open Source University for talents to get onchain',
      logoStyle: { width: '83px', height: '33px', margin: '10px 0px' },
      url: 'https://www.wtf.academy/',
    },
    {
      logo: pdao, 
      name: 'PeopleDAO',
      description: 'A metaDAO incubating public good projects for the people',
      logoStyle: { width: '49px', height: '49px' },
      url: 'https://people-dao.com/',
    },
    {
      logo: ts,
      name: 'TechSemester',
      description: 'A marketplace for tech enthusiasts and digital creators',
      logoStyle: { width: '50px', height: '50px' },
      url: 'https://www.linkedin.com/company/talntsapp/', 
    },
  ];

  return (
    <section id="works">
      <h2 className='workstitle'>Portfolio</h2>
      <span className="workDesc">These are some of the projects I have actively contributed to over the last 24 months</span>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            logo={project.logo} 
            name={project.name} 
            description={project.description} 
            logoStyle={project.logoStyle}
            url={project.url} // Pass the URL prop
          />
        ))}
      </div>
    </section>
  );
}

export default Works;
