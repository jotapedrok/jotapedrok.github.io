import React from 'react';
import { SiAboutdotme } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { AiFillHeart, AiOutlineProject, AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  const handleClick = ({ target }) => {
    const arrayItens = Array.from(document.querySelector('.header-nav').children);
    arrayItens.forEach((element) => {
      const div = element.firstChild;
      if (div.classList.contains('active')) {
        div.classList.remove('active');
      }
    });
    if (!target.classList.contains('nav-item')) {
      if (!target.parentNode.classList.contains('nav-item')) {
        target.parentNode.parentNode.classList.add('active');
      } else {
        target.parentNode.classList.add('active');
      }
    } else {
      target.classList.add('active');
    }
  };

  return (
    <div className="header">
      <nav className="header-nav">
        <Link to="/">
          <button
            type="button"
            className="nav-item home-nav active"
            onClick={handleClick}
          >
            <AiFillHome />
            <p>Home</p>
          </button>
        </Link>
        <Link to="/about">
          <button
            type="button"
            className="nav-item about-me-nav"
            onClick={handleClick}
          >
            <SiAboutdotme />
            <p>Sobre Mim</p>
          </button>
        </Link>
        <Link to="/skills">
          <button
            type="button"
            className="nav-item skills-nav"
            onClick={handleClick}
          >
            <GiSkills />
            <p>Habilidades</p>
          </button>
        </Link>
        <Link to="/interests">
          <button
            type="button"
            className="nav-item interests-nav"
            onClick={handleClick}
          >
            <AiFillHeart />
            <p>Interesses</p>
          </button>
        </Link>
        <Link to="/projects">
          <button
            type="button"
            className="nav-item project-nav"
            onClick={handleClick}
          >
            <AiOutlineProject />
            <p>Projetos</p>
          </button>
        </Link>
      </nav>
      <div
        className="header-name"
      >
        <h1>Jota Aguiar</h1>
      </div>
    </div>
  );
}
