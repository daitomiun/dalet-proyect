import React from 'react';
import logo from '../assets/logo-dalet.svg'


const Logo = ()=>{
    return (
      <>
        <div className="container">
          <img className="logo" src={logo} alt=""></img>
          <p>description de la pagina y de karen fierro</p>
        </div>
      </>
    );
}

export default Logo;