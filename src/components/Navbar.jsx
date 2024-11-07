import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import "../css/Navbar.css";

const Navbar = ({setSearchDisplay,cartTotalItems}) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSearch=()=>{
        if (location.pathname !== "/collection") {
            navigate("/collection");
            setSearchDisplay(true); // Ensure search bar appears on first click when navigating to collection
          } else {
            setSearchDisplay(prev => !prev); // Toggle only if already on the collection page
          }
    }
    
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
                <img src={assets.search_icon} alt="search" onClick={handleSearch}/>
                <img src={assets.profile_icon} alt="profile" />
                <NavLink to="/cart"><div className="cart_container">
                    <img src={assets.cart_icon} alt="cart" />
                    <div className="cart_items_num">{cartTotalItems>9? "9+" : cartTotalItems}</div>
                </div></NavLink>
                <img className="menu" src={assets.menu_icon} alt="menu"/>
            </div>
            
        </div>
    )
}

export default Navbar