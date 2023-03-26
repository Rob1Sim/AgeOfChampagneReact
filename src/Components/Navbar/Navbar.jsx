/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import logo from "../../images/favicon/favicon-32x32.png";
import "./Navbar.scss";
import UserContext from "../../contexts/user/index";
import {
  loginToAdminPanel,
  loginUrl,
  logoutUrl,
} from "../../services/api/users";
import Language from "./Language/Language";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useContext(UserContext);
  const { t } = useTranslation("navbar");
  const toggleMenu = () => {
    if (window.screen.width < 767) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav>
      <div className="start">
        <Link href="/cartes" aria-label="Liens vers l'accueil">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className={`nav-ul ${isOpen ? "show-nav" : "dont-show"} `}>
          <li>
            <button type="button" className="nav-link" onClick={toggleMenu}>
              <Link href="/cartes">{t("link-to-cards")}</Link>
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={toggleMenu}>
              <Link href="/partenaires">{t("link-to-partners")}</Link>
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={toggleMenu}>
              <Link href="/animations">{t("link-to-animations")}</Link>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="nav-link connexion-none"
              onClick={toggleMenu}
            >
              <Link className="nav-link connexion-none" href="/profile">
                {t("profile")}
              </Link>
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
                  {t("logout")}
                </a>
              </button>
            ) : (
              <button
                type="button"
                className="nav-link connexion-none"
                onClick={toggleMenu}
              >
                <a className="nav-link connexion-none" href={loginUrl()}>
                  {t("login")}
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
          {userData.roles.includes("ROLE_ADMIN") ? (
            <a href={loginToAdminPanel()} className="profile">
              {t("AdminPanel")}
            </a>
          ) : (
            ""
          )}
          <Link className="profile" href="/profile">
            {t("profile")}
          </Link>
          <button type="button" className="connexion">
            <a href={logoutUrl()}>{t("logout")}</a>
          </button>
          <Language />
        </div>
      ) : (
        <div className="end">
          <button type="button" className="connexion">
            <a href={loginUrl()}>{t("login")}</a>
          </button>
          <Language />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
