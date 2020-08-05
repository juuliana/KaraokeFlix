import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/img/julianaribeiro.png';

function Footer() {
  return (
    <FooterBase className="FooterFx">
      <a href="https://www.linkedin.com/in/juliana-dos-santos-ribeiro-b721b6197/">
        <img className="Logo" src={Logo} alt="LogoJuliana" />
      </a>
    </FooterBase>
  );
}

export default Footer;
