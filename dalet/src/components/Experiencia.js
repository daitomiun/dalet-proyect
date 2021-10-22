import React from "react";
import button from "../assets/right-arrow.png";

const Experiencia = () => {
  return (
    <>
      <div className="background red">
        <h1>experiencia</h1>
        <div className="carousel">
          <button className="carousel__button carousel__button--left">
            <img className="left" srcset={button} alt=""></img>
          </button>

          <div className="carousel__track-container">
            <ul className="carousel__track">
              <li className="carousel__slide">
                <img className="carousel__image" src="" alt="" srcset="" />
              </li>
              <li className="carousel__slide">
                <img className="carousel__image" src="" alt="" srcset="" />
              </li>
              <li className="carousel__slide">
                <img className="carousel__image" src="" alt="" srcset="" />
              </li>
            </ul>
          </div>

          <button className="carousel__button carousel__button--right">
            <img className="right" src={button} alt=""></img>
          </button>

          <div className="carousel__nav">
            <button className="carousel__indicator current-slide"></button>
            <button className="carousel__indicator"></button>
            <button className="carousel__indicator"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiencia;
