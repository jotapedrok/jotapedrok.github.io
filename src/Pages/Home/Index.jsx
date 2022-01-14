import React from 'react';
import me from '../../images/imag.png';

export default function Home() {
  return (
    <section className="home-presentation">
      <div className="image-container">
        <img src={me} alt="" />
      </div>
    </section>
  );
}
