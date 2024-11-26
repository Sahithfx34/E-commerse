import React, { Suspense, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem, updateQuantity } from "../features/cart/CartSlicer";
import "../css/Cart.css";
import Loading from "../components/Loading";

const Footer = React.lazy(() => import("../components/Footer"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const Title = React.lazy(() => import("../components/Title"));
const Cart_totals = React.lazy(() => import("../components/Cart_totals"));

const Cart = () => {
  const cart_items = useSelector((state) => state.cartItems.value);
  const dispatch = useDispatch();

  const memoizedCartItems = useMemo(() => cart_items, [cart_items]);

  const handleQuantity = useCallback(
    (value, item) => {
      dispatch(
        updateQuantity({
          id: item._id,
          size: item.size,
          quantity: parseInt(value),
        })
      );
    },
    [dispatch]
  );

  const handleRemoveItem = useCallback(
    (item) => {
      dispatch(removeItem(item));
    },
    [dispatch]
  );

  return (
    <Suspense fallback={<Loading/>}>
      <div className="cart_page_container">
        <Navbar />
        <hr />
        <div className="your_cart">
          <div className="cart_top_title">
            <Title title="Your" sub="cart" />
          </div>
          {memoizedCartItems.map((item) => (

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

              <input type="number" min={1} max={99} value={item.quantity} onChange={(e) => {const value = Math.min(Math.max(e.target.value, 1), 99); handleQuantity(value, item); }} />

              <DeleteIcon className="icon" onClick={() => handleRemoveItem(item)} />
            </div>
          ))}
        </div>
        <Cart_totals btnDisplay={true} />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Cart;
