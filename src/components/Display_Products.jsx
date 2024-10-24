import { useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import "../css/Home.css";
import { Link } from "react-router-dom";

const Display_Products = ({ display }) => {
    const [displayProduct, setDisplayProduct] = useState([]);

    useEffect(() => {
        display === "Latest" ? setDisplayProduct(products.slice(-10)) : setDisplayProduct(products.filter(item => item.bestseller === true).slice(-5));
    }, [display]);

    return (
        <>
            <div className="title">
                <h3><span>{display}</span> COLLECTION</h3>
                <div className="line"></div>
            </div>
            <p className="prod_des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quaerat quasi? </p>
            <div className="products">

                {displayProduct.map((item) => (
                    <Link key={item._id} to={`/product/${item._id}`}>
                        <div>
                            <img src={item.image[0]} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{"$" + item.price}</p>
                        </div>
                    </Link>
                ))}

            </div>
        </>
    );
}

export default Display_Products;
