import React from "react";
import '../css/Header.css'

const Header = () => {
    return (
        <header>
            <img src="../../../public/img/kitty.jpg"/>
            <h1>Welcome to Kitty Haven!</h1>
            <nav>
                <a>
                    Home
                </a>
                <a>
                    Profile
                </a>
            </nav>
        </header>
    )
}

export default Header