import React, { useContext, useState } from "react";
import logo from "../../images/favicon/favicon-32x32.png";
import "./Navbar.scss";
import UserContext from "../../contexts/user/index";
import { logoutUrl } from "../../services/api/users";
import Language from "./Language/Language";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useContext(UserContext);
  const { t } = useTranslation("navbar");
  const toggleMenu = () => {
    if (window.screen.width < 767) {
      setIsOpen(!isOpen);
    }
  };
  if (userData !== null && userData !== undefined) {
    // TODO: Rediriger sur la page de connexion
  }
  return (
    <nav>
      <div className="start">
        <a href="#" aria-label="Liens vers l'accueil">
          <img src={logo} alt="Logo" />
        </a>
        <ul className={`nav-ul ${isOpen ? "show-nav" : "dont-show"} `}>
          <li>
            <button type="button" className="nav-link" onClick={toggleMenu}>
              <a href="">{t("link-to-cards")}</a>
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
              <a className="nav-link connexion-none" href="">
                Mon profil
              </a>
            </button>
          </li>
          <li>
            {userData !== null && userData !== undefined ? (
              <button
                type="button"
                className="nav-link connexion-none"
                onClick={toggleMenu}
              >
                <a className="nav-link connexion-none" href={logoutUrl()}>
                  Déconnexion
                </a>
              </button>
            ) : (
              <button
                type="button"
                className="nav-link connexion-none"
                onClick={toggleMenu}
              >
                <a className="nav-link connexion-none" href="">
                  Connexion
                </a>
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

      {userData !== null && userData !== undefined ? (
        <div className="end">
          <a className="profile" href="">
            Mon profile
          </a>
          <button type="button" className="connexion">
            <a href={logoutUrl()}>Déconnexion</a>
          </button>
          <Language />
        </div>
      ) : (
        <div className="end">
          <button type="button" className="connexion">
            <a href="">Connexion</a>
          </button>
          <Language />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
