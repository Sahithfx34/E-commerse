import React, { Suspense, useMemo } from "react";
import "../css/MyOrders.css";

const Navbar = React.lazy(() => import("../components/Navbar"));
const Footer = React.lazy(() => import("../components/Footer"));
const Title = React.lazy(() => import("../components/Title"));

const MyOrders = () => {
    const isSubmitted = JSON.parse(localStorage.getItem("isSubmitted"));
    const userEmail = isSubmitted?.loggedIn ? isSubmitted.email : null;

    const orders = useMemo(() => {
        return userEmail
            ? JSON.parse(localStorage.getItem(`${userEmail}_orders`)) || []
            : [];
    }, [userEmail]);

    const renderOrders = useMemo(() => {
        if (orders.length === 0) {
            return <p>You have no orders yet.</p>;
        }
        return orders.map((order, index) => (
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
                                    <p>
                                        Date:{" "}
                                        <span>
                                            {new Date(order.orderDate).toLocaleDateString("en-US", {
                                                weekday: "short",
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                    </p>
                                    <p>
                                        Payment Mode: <span>{order.paymentMethod}</span>
                                    </p>
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
        ));
    }, [orders]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="my_orders">
                <Navbar />
                <div className="orders_container">
                    <div className="orders_title">
                        <Title title="my" sub="orders" />
                    </div>
                    {renderOrders}
                </div>
                <Footer />
            </div>
        </Suspense>
    );
};

export default MyOrders;