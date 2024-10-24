import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Project One',
      description: 'This is a brief description of Project One. It involves building a simple web app.',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Project Two is a mobile app built using React Native for tracking personal tasks.',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'This project focuses on creating a REST API using Node.js and Express.',
      link: '#'
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
