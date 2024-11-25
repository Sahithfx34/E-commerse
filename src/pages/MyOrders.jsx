import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import "../css/MyOrders.css"

const MyOrders = () => {
    const isSubmitted = JSON.parse(localStorage.getItem("isSubmitted"));
    const userEmail = isSubmitted?.loggedIn ? isSubmitted.email : null;
    

    const orders = userEmail
        ? JSON.parse(localStorage.getItem(`${userEmail}_orders`)) || []
        : [];

    return (
        <div className="my_orders">
            <Navbar />
            <div className="orders_container">
                <div className="orders_title">
                    <Title title="my" sub="orders" />
                </div>
                {orders.length === 0 ? (
                    <p>You have no orders yet.</p>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className="order">
                            <div className="order_items">
                                {order.items.map((item, i) => (
                                    <div key={i} className="order_item">
                                        <div className="order_info">
                                            <div>
                                                <img src={item.image[0]} alt={item.name} />
                                            </div>
                                            <div>
                                                <h3>{item.name}</h3>
                                                <div>
                                                    <p>${item.price}</p>
                                                    <p>Quantity: {item.quantity}</p>
                                                    <p>Size: {item.size}</p>
                                                </div>
                                                <p>Date: <span>{new Date(order.orderDate).toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric", })}</span></p>
                                                <p>Payment Mode: <span>{order.paymentMethod}</span></p>
                                            </div>
                                        </div>
                                        <div className="status">
                                            <div className="green_bot"></div>
                                            Out for delivery
                                            
                                        </div>
                                        <button>Track Order</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MyOrders;
