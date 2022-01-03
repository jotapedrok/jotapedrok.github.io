import React from "react";
import { SiAboutdotme } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = ({ target }) => {
    const arrayItens = Array.from(document.querySelector('.header-nav').children);
    arrayItens.forEach((element) => {
      const div = element.firstChild;
      if(div.classList.contains('active')) {
        div.classList.remove('active'); 
      }
    });
    if(!target.classList.contains('nav-item')) {
      if(!target.parentNode.classList.contains('nav-item')) {
        target.parentNode.parentNode.classList.add('active');
      } else {
        target.parentNode.classList.add('active');
      }
    } else {
      target.classList.add('active');
    }
    ;
  }

  return (
    <div className="header">
      <nav className="header-nav">
        <Link to="/">
          <div
            className="nav-item about-me-nav active"
            onClick={ handleClick }
          >
            <SiAboutdotme />
            <p>Sobre Mim</p>
          </div>
        </Link>
        <Link to="/skills">
          <div
            className="nav-item skills-nav"
            onClick={ handleClick }
          >
            <GiSkills />
            <p>Habilidades</p>
          </div>
        </Link>
        <Link to="/interests">
          <div
            className="nav-item interests-nav"
            onClick={ handleClick }
          >
            <AiFillHeart />
            <p>Interesses</p>
          </div>
        </Link>
      </nav>
      <div
        className="header-name"
      >
        <h1>Jota Aguiar</h1>
      </div>
    </div>
  )
}

export default Header;