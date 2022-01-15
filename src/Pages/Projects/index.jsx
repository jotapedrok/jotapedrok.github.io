import Aos from 'aos';
import React, { useEffect } from 'react';
import ProjectCard from '../../Components/ProjectCard';
import projects from '../../Data/projectsData';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    if (window.innerHeight > 1366) {
      Aos.init({
        duration: 200,
        delay: 0,
        offset: 30,
      });
    }
  }, []);
  return (
    <div className="projects">
      <div className="projects-title-container">
        <h1>Projetos</h1>
      </div>
      <div className="projects-content">
        {projects.map((project) => (
          <div
            data-aos="zoom-out"
            className="card-container"
            key={project.id}
          >
            <ProjectCard
              projectId={project.id}
              cardDescription={project.shortDescription}
              cardName={project.name}
              thumb={project.thumb}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
