import React from "react";
import logoMateo from '../assets/logo-mateo.svg'

const Footer = () => {
  return (
    <>
      <div className="background purple">
        <p>¿Quieres aprender?</p>
        <h1>Contactame</h1>
        <h1>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            312-301-2202
          </a>
        </h1>
        <h1>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Lumaka84@gmail.com
          </a>
        </h1>
      </div>
      <footer>
        <h2>logo design, web design and web development by</h2>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={logoMateo} alt="" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
