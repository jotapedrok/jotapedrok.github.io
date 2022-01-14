import React from 'react';
import ProjectCard from '../../Components/ProjectCard';
import projects from '../../Data/projectsData';

function Projects() {
  return (
    <div className="projects">
      <div className="projects-title-container">
        <h1>Projetos</h1>
      </div>
      <div className="projects-content">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            projectId={project.id}
            cardDescription={project.shortDescription}
            cardName={project.name}
            thumb={project.thumb}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
