import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/img/julianaribeiro.png';

function Footer() {
  return (
    <FooterBase className="FooterFx">
      <a href="https://github.com/juuliana">
        <img className="Logo" src={Logo} alt="LogoJuliana" />
      </a>
    </FooterBase>
  );
}

export default Footer;
