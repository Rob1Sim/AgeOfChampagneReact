
import  logo  from "/public/images/favicon/favicon-32x32.png"
import  franceFlag  from "/public/images/flags/france.png"
import  usFlag  from "/public/images/flags/united-states.png"
import {useState} from "react";

function Navbar(){
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = ()=>{
        setShowLinks(!showLinks)
    }
    return(
        <nav>
            <a href=""><img src={logo}/></a>
            <ul className={`nav-ul ${showLinks ? "show-nav" : "dont-show"} `}>
                <li className="nav-link">
                    <a href="">Mes cartes</a>
                </li>
                <li className="nav-link">
                    <a href="">Les vignerons partenaires</a>
                </li>
                <li className="nav-link">
                    <a href="">Les animations</a>
                </li>

            </ul>
            <button className="nav_burger" onClick={handleShowLinks} aria-label="Bouton ouvre la barre de navigation">
                <span className="burger_bar"></span>
            </button>
            <div className="dropdown-container">
                <button className="btn-dropdown">
                    <span className="material-symbols-outlined">menu</span>
                </button>

                <li className="dropdown">
                    <button className="btn-flag">
                        <img className="btn-img" src={franceFlag}/>
                    </button>
                    <div className="dropdown-flags">
                        <button className="btn-flag-fr">
                            <img className="btn-img-fr" src={franceFlag}/>
                        </button>
                        <button className="btn-flag-us">
                            <img className="btn-img-us" src={usFlag}/>
                        </button>
                    </div>

                </li>
            </div>
        </nav>

)
}

export default Navbar;