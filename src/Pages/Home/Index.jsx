import React from 'react';
import me from '../../images/imag-removebg-preview.png';

export default function Home() {
  return (
    <section className="home-presentation">
      <div className="image-container">
        <img src={me} alt="Jota Aguiar" />
      </div>
      <div className="description-container">
        <h1 className="name">Jota Aguiar</h1>
        <h4 className="subtitle">Desenvolvedor Web</h4>
        <h5 className="developer-type">Frontend</h5>
      </div>
    </section>
  );
}
