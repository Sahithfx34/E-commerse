import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import "../css/Cart.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem, updateQuantity } from "../features/cart/CartSlicer";
import Cart_totals from "../components/Cart_totals";

const Cart = () => {
  const cart_items = useSelector((state) => state.cartItems.value);
  const dispatch = useDispatch();

  const handleQuantity = (value, item) => {
    dispatch(updateQuantity({ id: item._id, size: item.size, quantity: parseInt(value) }))
  }
  
  return (
    <div className="cart_page_container">
      <Navbar />
      <hr />
      <div className="your_cart">
        <div className="cart_top_title">
          <Title title="Your" sub="cart" />
        </div>
        {
          cart_items.map((item) =>
            <div className="cart_item_container" key={item._id}>
              <div className="cart_item">
                <img src={item.image[0]} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  
                  <div className="cart_sub_content">
                    <p>${item.price}</p>
                    <p>{item.size}</p>
                  </div>

                </div>
              </div>
              <input type="number" min={1} max={99} value={item.quantity} onChange={(e) => handleQuantity(e.target.value, item)} />
              <DeleteIcon className="icon" onClick={() => dispatch(removeItem(item))} />
            </div>
          )
        }
      </div>
      <Cart_totals btnDisplay={true}/>
      <Footer />
    </div>
  )
}

export default Cart;