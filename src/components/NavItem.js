import React from "react";

const NavItem = props => {
    const { destination } = props
    const handleClick = e => {
        let section = document.getElementById(destination);
        e.preventDefault();  // Stop Page Reloading
        section && section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return (
        <div className={`header__navigation__item header__navigation__${destination}`} onClick={handleClick}><a href={`#${destination}`}>{destination}</a></div>
    )
}

export default NavItem