import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import "../css/Cart.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem , updateQuantity} from "../features/cart/CartSlicer";

const Cart = () => {
  const cart_items = useSelector((state)=>state.cartItems.value);
  const dispatch = useDispatch();

  const handleQuantity = (value,item)=>{
    dispatch(updateQuantity({id: item._id, size: item.size, quantity: parseInt(value)}))
  }

  const subTotal = cart_items.reduce((sum,item)=> item.price*item.quantity+sum,0);

  return (
    <div className="cart_page_container">
        <Navbar />
        <div className="your_cart">
            <Title title="Your" sub="cart"/>
            {
              cart_items.map((item)=> 
                <div className="cart_item" key={item._id}>
                  <img src={item.image[0]} alt={item.name}/>
                  <div>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{item.size}</p>

                  </div>
                  <input type="number" min={1} max={99} value={item.quantity} onChange={(e)=>handleQuantity(e.target.value,item)}/>
                  <DeleteIcon onClick={()=>dispatch(removeItem(item))}/>
                </div>
              )
            }
        </div>
        <div className="amount"></div>
            <Title title="cart" sub="totals"/>
            <div>
              <p>Subtotal</p>
              <p>${subTotal?subTotal:0}</p>
            </div>
            <div>
              <p>Shipping Fee</p>
              <p>$10.00</p>
            </div>
            <div>
              <p>Total</p>
              <p>${subTotal>0?subTotal+10:0}</p>
            </div>
        <Footer/>
    </div>
  )
}

export default Cart;