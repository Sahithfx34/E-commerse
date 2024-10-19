import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <div className="nav_container">
            
            <NavLink to="/"><img className="logo" src={assets.logo} alt="logo" /></NavLink>
            
            <div className="nav_links">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/collection">COLLECTION</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
                <button>AdminPanel</button>
            </div>
            <div className="nav_items">
                <img src={assets.search_icon} alt="search" />
                <img src={assets.profile_icon} alt="profile" />
                <div className="cart_container">
                    <img src={assets.cart_icon} alt="cart" />
                    <div className="cart_items_num">0</div>
                </div>
                <img className="menu" src={assets.menu_icon} alt="menu"/>
            </div>
            
        </div>
    )
}

export default Navbar