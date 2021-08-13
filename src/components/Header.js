import React from "react";
import NavItem from "./NavItem";

import "../css/header.css"

const navigationMenu = ["nosotros", "servicios", "contacto", "empleo"]

const Header = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const elem = React.useRef(null)

    const handleScroll = () => {

        const position = window.scrollY + elem.current.getBoundingClientRect().bottom
        const offset = window.scrollY;

        console.log(position, offset)

        if (offset > position) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })


    return (
        <header className="header">
            <div ref={elem} className="header__banner">

            </div>
            <nav className={`header__navigation ${scrolled ? "sticky" : null}`}>
                {
                    navigationMenu.map(nav => <NavItem key={nav} destination={nav} />)
                }
            </nav>
        </header>
    )
}

export default Header;