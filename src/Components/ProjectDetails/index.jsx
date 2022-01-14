import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../Data/projectsData';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((e) => e.id === Number(id));
  return (
    <div className="projectDetail">
      { project
        ? (
          <div className="project-details">
            <div className="project-details-header">
              <div className="project-details-header-thumb-container">
                <img src={project.thumb} alt={`${project.name} thumbail`} />
              </div>
              <div className="project-details-header-content">
                <h1>{project.name}</h1>
                <div className="check-box-container">
                  <label htmlFor="mobile">
                    <input
                      type="checkbox"
                      name="mobile"
                      id="mobile"
                      checked={project.mobile}
                    />
                    Mobile
                  </label>
                  <label htmlFor="browser">
                    <input
                      type="checkbox"
                      name="browser"
                      id="browser"
                      checked={project.browser}
                    />
                    Browser
                  </label>
                </div>
                <div className="project-details-header-content-description">
                  <p>{project.descrioition}</p>
                </div>
                <div className="project-details-header-content-links">
                  <a href={project.projectLink}>Acesse o App</a>
                  <a href={project.repositoryLink}>Acesse o Repositório</a>
                </div>
              </div>
            </div>
            <div className="project-details-gallery">
              <h1 className="project-details-gellery-title">Galeria do App</h1>
              <div className="project-details-gallery-content">

                {project.pics.map((pic, i) => (
                  <img
                    className={`project-pic pic${i + 1}`}
                    src={pic}
                    alt={`project pic ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )
        : <h1 style={{ color: 'red' }}>Project Not Found</h1>}
    </div>
  );
}
