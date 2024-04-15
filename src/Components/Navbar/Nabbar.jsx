import { useState } from "react";
import { assets } from '../../assets/assets';

import './Nabbar.css';
const Nabbar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <div className="navbar">
            <img src={assets.logo} className="logo" alt="" />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ''}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</li>
                <li onClick={() => setMenu("contacu-us")} className={menu === "contacu-us" ? "active" : ""}>Contact-Us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    );
};

export default Nabbar;