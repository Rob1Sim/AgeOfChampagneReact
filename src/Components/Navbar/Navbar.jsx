import React, { useContext, useState } from "react";
import logo from "../../images/favicon/favicon-32x32.png";
import franceFlag from "../../images/flags/france.png";
import "./Navbar.scss";
import UserContext from "../../contexts/user/index";
import { logoutUrl } from "../../services/api/users";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useContext(UserContext);
  const toggleMenu = () => {
    if (window.screen.width < 767) {
      setIsOpen(!isOpen);
    }
  };

  const [language, setLanguage] = useState("fr");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  console.log(userData !== null && userData !== undefined);
  return (
    <nav>
      <div className="start">
        <a href="#" aria-label="Liens vers l'accueil">
          <img src={logo} alt="Logo" />
        </a>
        <ul className={`nav-ul ${isOpen ? "show-nav" : "dont-show"} `}>
          <li>
            <button type="button" className="nav-link" onClick={toggleMenu}>
              <a href="">Les cartes</a>
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={toggleMenu}>
              <a href="">Les vignerons partenaires</a>
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={toggleMenu}>
              <a href="">Les animations</a>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="nav-link connexion-none"
              onClick={toggleMenu}
            >
              <a href="">Mon profil</a>
            </button>
          </li>
          <li>
            {userData !== null && userData !== undefined ? (
              <button
                type="button"
                className="nav-link connexion-none"
                onClick={toggleMenu}
              >
                <a href={logoutUrl()}>Déconnexion</a>
              </button>
            ) : (
              <button
                type="button"
                className="nav-link connexion-none"
                onClick={toggleMenu}
              >
                <a href="">Connexion</a>
              </button>
            )}
          </li>
          <button
            type="button"
            className="quit_button"
            onClick={toggleMenu}
            aria-label="Bouton ouvre la barre de navigation"
          >
            <span className="quit" />
          </button>
        </ul>
      </div>
      <button
        type="button"
        className={`nav_burger ${isOpen ? "dont-show-burger" : "show-burger"} `}
        onClick={toggleMenu}
        aria-label="Bouton ouvre la barre de navigation"
      >
        <span className="burger_bar" />
      </button>
      <div className="end">
        {userData !== null && userData !== undefined ? (
          <button type="button" className="connexion" onClick={toggleMenu}>
            <a href={logoutUrl()}>Déconnexion</a>
          </button>
        ) : (
          <button type="button" className="connexion" onClick={toggleMenu}>
            <a href="">Connexion</a>
          </button>
        )}
        <img
          className="btn-img"
          src={franceFlag}
          alt="Drapeau du pays sélectionné"
        />
      </div>
    </nav>
  );
}

export default Navbar;
