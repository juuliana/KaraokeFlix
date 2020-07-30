import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/img/julianaribeiro.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/juuliana">
        <img className="Logo" src={Logo} alt="LogoJuliana" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
