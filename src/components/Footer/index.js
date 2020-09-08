import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
      <img className="Logo" src={Logo} alt="Brflix logo"/>
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.linkedin.com/in/henrique-assis/">
          Henrique Assis
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
