import Aos from 'aos';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../Data/projectsData';
import githubIcon from '../../images/githubIcon.svg';
import 'aos/dist/aos.css';

export default function ProjectDetails() {
  useEffect(() => {
    if (window.innerHeight > 1366) {
      Aos.init({
        duration: 700,
      });
    }
  }, []);
  const { id } = useParams();
  const project = projects.find((e) => e.id === Number(id));
  return (
    <div className="projectDetail">
      { project
        ? (
          <div className="project-details">
            <div className="project-details-header">
              <div className="project-details-header-thumb-container">
                <a href={project.projectLink}>
                  <img src={project.thumb} alt={`${project.name} thumbail`} />
                </a>
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
                <div
                  className="project-details-header-content-description"
                  data-aos="fade-top"
                >
                  <p>{project.descrioition}</p>
                </div>
                <div className="project-details-header-content-links">
                  <a
                    data-aos="fade-right"
                    href={project.projectLink}
                  >
                    Acesse o App
                  </a>
                  <a
                    href={project.repositoryLink}
                    data-aos="fade-left"
                  >
                    <img src={githubIcon} alt="github icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-details-gallery">
              <h1
                className="project-details-gellery-title"
                data-aos="zoom-out"
              >
                Galeria do App

              </h1>
              <div className="project-details-gallery-content">

                {project.pics.map((pic, i) => (
                  <img
                    data-aos="fade-in"
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
