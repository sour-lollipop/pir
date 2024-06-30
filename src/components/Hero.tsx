import React from 'react';
import globus from '../images/globus.svg'
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className='text'>
      <h1>Добро пожаловать <br></br>в PIR-Kazakhstan!</h1>
      <p>Ваш надежный партнер в IT-услугах и автоматизации</p>
      <a href="#contact" className="cta-button">Свяжитесь с нами</a>
      </div>
      <img src={globus}/>
    </section>
  );
};

export default Hero;
