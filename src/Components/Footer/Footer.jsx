import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <ul className="f-ul">
        <li className="">
          <a
            href="https://www.facebook.com/AgeofChampagne/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="">
          <a
            href="https://www.linkedin.com/company/74071514/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="">
          <a
            href="mailto:aoc.le.jeu@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li className="">
          <a
            href="https://linktr.ee/ageofchampagne"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faShare} />
          </a>
        </li>
      </ul>
      <p>Age of Champagne - Éditeur : Old hen Games © 2022</p>
    </footer>
  );
}

export default Footer;
