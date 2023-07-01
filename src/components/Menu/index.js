import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/karaokêflix.png";
import "./Menu.css";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Juflix Logo" />
      </Link>

      {/* <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Adicionar
      </Button> */}
    </nav>
  );
}
