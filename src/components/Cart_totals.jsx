import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Title from "./Title";
import "../css/Cart.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const Cart_totals = ({btnDisplay}) => {
    const navigate = useNavigate()
    const cart_items = useSelector((state) => state.cartItems.value);
    const subTotal = cart_items.reduce((sum, item) => item.price * item.quantity + sum, 0);
    const cartTotalItems = cart_items.reduce((sum, item) => sum + item.quantity, 0);

    const handleClick =()=>{
      if(!cartTotalItems){
        toast.error("Add items to cart")
      }else{
        navigate("/place-order");
      }

    }

  return (
    <>
    <div className="cart_bottom_title">
        <Title title="cart" sub="totals" />
      </div>
      <div className="cart_total">
        <div>
          <p>Subtotal</p>
          <p>${subTotal ? subTotal : 0}</p>
        </div>
        <hr />
        <div>
          <p>Shipping Fee</p>
          <p>$10</p>
        </div>
        <hr />
        <div className="Total">
          <p>Total</p>
          <p>${subTotal > 0 ? subTotal + 10 : 0}</p>
        </div>
        {btnDisplay&& <button className="btn" onClick={handleClick}>PROCEED TO CHECKOUT</button>}
      </div>
      <ToastContainer />
    </>
  )
}

export default Cart_totals;