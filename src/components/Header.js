import React from "react";
import NavItem from "./NavItem";

import "../css/header.css"

const navigationMenu = ["la empresa", "servicios", "contacto", "empleo"]

const Header = () => {
    return (
        <header className="header">
            <div className="header__banner">

            </div>
            <nav className="header__navigation">
                {
                    navigationMenu.map(nav => <NavItem destination={nav} />)
                }
            </nav>
        </header>
    )
}

export default Header;