import Aos from 'aos';
import React, { useEffect } from 'react';
import instaIcon from '../../images/instaIcon.svg';
import linkedinIcon from '../../images/linkedinIcon.svg';
import outlookIcon from '../../images/outlookIcon.svg';
import githubIcon from '../../images/githubIcon.svg';
import me from '../../images/imag.png';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    const windowHeight = window.innerHeight;
    if (windowHeight < 1366) {
      Aos.init({
        duration: 400,
      });
    }
  }, []);

  return (
    <div className="about">
      <div className="about-top">
        <div className="about-top-image-container">
          <div className="about-top-image-container-bg" />
          <img
            src={me}
            alt="Jota Aguiar"
          />
        </div>
        <div className="about-top-name-container">
          <h2 id="about-name">Jota Aguiar</h2>
          <h4>Desenvolvedor Web</h4>
          <h6>Frontend</h6>
        </div>
        <div className="space" />
      </div>
      <div className="about-content">
        <div className="about-content-text-container">
          <div className="text-left" data-aos="fade-left">
            <div className="text-left-container">
              <p>
                Me chamo
                {' '}
                <strong>João Pedro de Aguiar Santos</strong>
                , mas pode me chamar de
                {' '}
                <strong>Jota</strong>
                !
              </p>
              <p>
                Sou do Rio de Janeiro, Brasil. Estudante de Desenvolvimento de Softwares da
                {' '}
                <a href="https://www.betrybe.com/"><strong>Trybe</strong></a>
              </p>
            </div>
          </div>
          <div className="text-right" data-aos="fade-right">
            <div className="text-right-container">
              <p>
                Foco minha carreira no desenvolvimento
                {' '}
                <strong>Front-end</strong>
                {' '}
                e procuro a cada dia aprender um pouco mais dessa área e
                {' '}
                continuar a me desenvolver como DEV.
              </p>
            </div>
          </div>
        </div>
        <div className="about-content-social-media">
          <h1>Você pode encontrar aqui:</h1>
          <div className="about-content-social-media-icons">
            <img
              src={instaIcon}
              alt="instaIcon"
              data-aos="fade-up"
              data-aos-offset="50"
            />
            <img
              src={githubIcon}
              alt="githubIcon"
              data-aos="fade-up"
              data-aos-offset="50"
            />
            <img
              src={linkedinIcon}
              alt="linkedinIcon"
              data-aos="fade-up"
              data-aos-offset="50"
            />
            <img
              src={outlookIcon}
              alt="outlookIcon"
              data-aos="fade-up"
              data-aos-offset="50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
