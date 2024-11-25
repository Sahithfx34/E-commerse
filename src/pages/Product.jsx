import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar";
import { products } from "../assets/frontend_assets/assets";
import "../css/Product.css"
import Footer from "../components/Footer";
import { useState } from "react";
import { Rating } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlicer";
import NotFound from "./NotFound";

const Product = () => {
  const { id } = useParams();
  const defaultImg = products.filter(item => item._id === id).map((i) => i.image[0]);
  const [currImage, setCurrImage] = useState(defaultImg);
  const [size, setSize] = useState(null);





  const dispatch = useDispatch();

  const handleImage = (item) => {
    setCurrImage(item)
  }

  const handleSize = (item) => {
    setSize(item);
  }
  const handleCart = () => {
    const item = products.find(item => item._id === id);

    if (!size) {
      toast.error("Select product size")
    } else {
      dispatch(addItem({ ...item, size }));
      toast.success("Added to cart")

    }

  }

  return (
    products.some(item => item._id === id) ?
      <div className="product_container">
        <Navbar />
        <hr />
        <ToastContainer />
        <hr />
        {
          products.filter(item => item._id === id).map(item => (
            <div key={item._id}>
              <div className="hero_product_container">
                <div className="all_images">
                  {
                    item.image.map((img, i) => <img onClick={() => handleImage(img)} key={i} src={img} alt={item.name} />)
                  }
                </div>
                <div className="currImg">
                  <img src={currImage} alt={item.name} />
                </div>
                <div className="hero_product_content">
                  <h3>{item.name}</h3>
                  <div className="rating">
                    <Rating name="read-only" value={4} readOnly />
                    <span>(122)</span>
                  </div>
                  <p>${item.price}</p>
                  <p>{item.description}</p>
                  <p>Select Size</p>
                  <div className="hero_size">
                    {item.sizes.map((item, i) => (
                      <div tabIndex="0" key={i} value={item} onClick={() => handleSize(item)}>{item}</div>
                    ))}
                  </div>
                  <button onClick={handleCart}>ADD TO CART</button>
                  <hr />
                  <div className="hero_desc">

                    <p>100% Original product.</p>
                    <p>Cash on delivery is available on this product.</p>
                    <p>Easy return and exchange policy within 7 days.</p>

                  </div>
                </div>
              </div>
              <div className="reviews_and_desc">
                <div className="section">
                  <div>Description</div>
                  <div>Reviews(122)</div>
                </div>
                <div className="section_content">
                  <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                  <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
                </div>
              </div>
              <div></div>
              <Footer />
            </div>

          ))
        }
      </div>
      :
      <NotFound />
  )
}

export default Product;