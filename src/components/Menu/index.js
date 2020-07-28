import React from 'react';

import Logo from '../../assets/img/juflix.png';
import './Menu.css';

import Button from '../Button';

export default function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Juflix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}