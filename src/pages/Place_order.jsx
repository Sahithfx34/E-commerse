import Cart_totals from "../components/Cart_totals";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import useDeliveryForm from "../hooks/useDeliveryForm";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Place_order.css";
import { clearCart } from "../features/cart/CartSlicer";

const Place_order = () => {
    const { deliveryDetails, handleChange, validate, resetForm } = useDeliveryForm();
    const [selected, setSelected] = useState("");
    const cart_items = useSelector((state) => state.cartItems.value);
    const dispatch = useDispatch();

    const handlePaymentSelection = (paymentMethod) => {
        setSelected(paymentMethod);
    };

    const handlePlaceOrder = () => {
        if (cart_items.length === 0) {
            toast.error("Your cart is empty!");
            return;
        }
    
        const validationErrors = validate();
        if (validationErrors.length > 0) {
            validationErrors.forEach((error) => toast.error(error));
            return;
        }
    
    
        const isSubmitted = JSON.parse(localStorage.getItem("isSubmitted"));
        const userEmail = isSubmitted?.loggedIn ? isSubmitted.email : null;
    
        if (!userEmail) {
            toast.error("You must be logged in to place an order.");
            return;
        }
    
        const orderDetails = {
            items: cart_items,
            paymentMethod: selected,
            orderDate: new Date().toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short",day: "numeric",})
        };
    
        const userOrders = JSON.parse(localStorage.getItem(`${userEmail}_orders`)) || [];
        localStorage.setItem(`${userEmail}_orders`, JSON.stringify([...userOrders, orderDetails]));
    
        toast.success("Order placed successfully!");
        dispatch(clearCart(cart_items));
        setSelected("");
        resetForm();
    };
    
    

    return (
        <div className="place_order_main">
            <Navbar />
            <div className="place_order_container">
                <div className="place_order_content">
                    <div className="delivary_title">
                        <Title title="delivery" sub="information" />
                    </div>
                    <form>
                        <div>
                            <input type="text" name="firstname" placeholder="First name" value={deliveryDetails.firstname} onChange={handleChange} />
                            <input type="text" name="lastname" placeholder="Last name" value={deliveryDetails.lastname} onChange={handleChange} />
                        </div>
                        <input type="email" name="email" placeholder="Email address" value={deliveryDetails.email} onChange={handleChange} />
                        <input type="text" name="street" placeholder="Street" value={deliveryDetails.street} onChange={handleChange} />
                        <div>
                            <input type="text" name="city" placeholder="City" value={deliveryDetails.city} onChange={handleChange} />
                            <input type="text" name="state" placeholder="State" value={deliveryDetails.state} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="number" name="zipcode" placeholder="Zipcode" value={deliveryDetails.zipcode} onChange={handleChange} />
                            <input type="text" name="country" placeholder="Country" value={deliveryDetails.country} onChange={handleChange} />
                        </div>
                        <input type="number" name="phone" placeholder="Phone" value={deliveryDetails.phone} onChange={handleChange} />
                    </form>
                </div>
                <div className="place_order_payment">
                    <Cart_totals btnDisplay={false} />
                    <div className="title_paym">
                        <h3> <span>Payment</span> Method</h3>
                        <div className="line"></div>
                    </div>
                    <div className="payment_methods">
                        <div onClick={() => handlePaymentSelection("stripe")}>
                            <div className={selected === "stripe" ? "pay_style" : "pay_sty"}></div>
                            <img src={assets.stripe_logo} alt="stripe" />
                        </div>
                        <div onClick={() => handlePaymentSelection("razorpay")}>
                            <div className={selected === "razorpay" ? "pay_style" : "pay_sty"}></div>
                            <img className="razorpay" src={assets.razorpay_logo} alt="razorpay" />
                        </div>
                        <div onClick={() => handlePaymentSelection("cash")}>
                            <div className={selected === "cash" ? "pay_style" : "pay_sty"}></div>
                            <p>CASH ON DELIVERY</p>
                        </div>
                    </div>
                    <div className="place_btn">
                        <button className="btn" onClick={handlePlaceOrder}>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Place_order;
