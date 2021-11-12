import React from "react";
import Logo from "../../Images/Logo.png"
import s from "./Hader.module.css"

const Header = (props) => {
    return (
        <header className={s.container}>
            <div className={s.logoName}>
                <img className={s.logo} src={Logo} alt="lll"/> <h3>YourList</h3>
            </div>
        </header>
    )
}

export default Header;