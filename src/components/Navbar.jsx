import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import "../css/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import React,{ useMemo,useCallback } from "react";
import { Toggle } from "../features/search/SearchSlicer";
import useLoginForm from "../hooks/useLoginForm";

const Navbar = () => {
    const cart_items = useSelector((state) => state.cartItems.value);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { isSubmitted, handleLogout } = useLoginForm();

    const cartTotalItems = useMemo(
        () => cart_items.reduce((sum, item) => sum + item.quantity, 0),
        [cart_items]
      );

      const handleSearch = useCallback(() => {
        if (location.pathname !== "/collection") {
          navigate("/collection");
        }
        dispatch(Toggle());
      }, [navigate, location.pathname, dispatch]);
    
      const handleProfile = useCallback(() => {
        if (!isSubmitted) {
          navigate("/login");
        }
      }, [isSubmitted, navigate]);
    
      const handleMyOrders = useCallback(() => {
        navigate("/myorders");
      }, [navigate]);


    return (
        <>
            <div className="nav_container">
                <NavLink to="/"><img className="logo" src={assets.logo} alt="logo" /></NavLink>
                <div className="nav_links">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/collection">COLLECTION</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
                <div className="nav_items">
                    <img src={assets.search_icon} alt="search" onClick={handleSearch} />

                    <div className="profile-container">
                        <img src={assets.profile_icon} alt="profile" className="profile-icon" onClick={handleProfile} />
                        {isSubmitted ? (
                            <div className="dropdown-menu">
                                <button onClick={handleMyOrders}>My Orders</button>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        ) : null}
                    </div>

                    <NavLink to="/cart">
                        <div className="cart_container">
                            <img src={assets.cart_icon} alt="cart" />
                            {cartTotalItems ? (
                                <div className="cart_items_num">{cartTotalItems > 9 ? "9+" : cartTotalItems}</div>
                            ) : null}
                        </div>
                    </NavLink>
                    <img className="menu" src={assets.menu_icon} alt="menu" />
                </div>
            </div>
        </>
    );
};

export default React.memo(Navbar);
