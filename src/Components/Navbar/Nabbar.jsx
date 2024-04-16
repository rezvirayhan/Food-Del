import { useState } from "react";
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

import './Nabbar.css';
const Nabbar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <div className="navbar">
            <img src={assets.logo} className="logo" alt="" />
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "actives" : ''}>Home</Link>
                <a href="#ExploreMenu" onClick={() => setMenu("menu")} className={menu === "menu" ? "actives" : ""}>Menu</a>
                <a href="#app-dawnload" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "actives" : ""}>Mobile-App</a>
                <a href="#footer" onClick={() => setMenu("contacu-us")} className={menu === "contacu-us" ? "actives" : ""}>Contact-Us</a>
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