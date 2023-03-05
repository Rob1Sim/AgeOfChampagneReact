
import  logo  from "/public/images/favicon/favicon-32x32.png"
import  franceFlag  from "/public/images/flags/france.png"
import  usFlag  from "/public/images/flags/united-states.png"
import {useState} from "react";
import "./Navbar.scss";

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [language, setLanguage] = useState('fr');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    }


    return(
        <nav>
            <div className="start">
                <a href="#" aria-label="Liens vers l'accueil"><img src={logo} alt="Logo"/></a>
                <ul className={`nav-ul ${isOpen ? "show-nav" : "dont-show"} `}>

                    <li><a href="" className="nav-link" onClick={toggleMenu}>Les cartes</a></li>
                    <li><a href="" className="nav-link" onClick={toggleMenu}>Les vignerons partenaires</a></li>
                    <li><a href="" className="nav-link" onClick={toggleMenu}>Les animations</a></li>
                    <li><a href="" className="nav-link connexion-none" onClick={toggleMenu}>Mon profil</a></li>
                    <li><a href="" className="nav-link connexion-none" onClick={toggleMenu}>Déconnexion</a></li>
                    <button className="quit_button" onClick={toggleMenu} aria-label="Bouton ouvre la barre de navigation">
                        <span className="quit"></span>
                    </button>

                </ul>
            </div>
            <button className={`nav_burger ${isOpen ? "dont-show-burger" : "show-burger"} `} onClick={toggleMenu} aria-label="Bouton ouvre la barre de navigation">
                <span className="burger_bar"></span>
            </button>
            <div className="end">
                <a href="" className="connexion" onClick={toggleMenu}>Mon profil</a>
                <a href="" className="connexion" onClick={toggleMenu}>Déconnexion</a>
                <img className="btn-img" src={franceFlag}/>
            </div>
        </nav>

)
}

export default Navbar;