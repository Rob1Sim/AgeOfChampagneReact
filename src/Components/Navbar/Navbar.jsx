
import  logo  from "/public/images/favicon/favicon-32x32.png"
import  franceFlag  from "/public/images/flags/france.png"
import  usFlag  from "/public/images/flags/united-states.png"

function Navbar(){
    return(
        <nav>
            <ul className="nav-link">
                <div className="nav-logo-link">
                    <li className="nav-title">
                        <a href=""><img src={logo}/></a>
                    </li>
                    <li className="nav-item no-dropdown">
                        <a href="">Mes cartes</a>
                    </li>
                    <li className="no-dropdown">
                        <a href="">Les vignerons partenaires</a>
                    </li>
                    <li className="no-dropdown">
                        <a href="">Les animations</a>
                    </li>
                </div>
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

            </ul>
        </nav>

)
}

export default Navbar;