import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/karoakêflix.png';
import './Menu.css';

import Button from '../Button';

export default function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Juflix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Adicionar
            </Button>
        </nav>
    );
}