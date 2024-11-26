import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { assets } from "../assets/frontend_assets/assets";
import "../css/Home.css";
import Loading from "../components/Loading";


const Navbar = React.lazy(() => import("../components/Navbar"));
const Display_Products = React.lazy(() => import("../components/Display_Products"));
const Subscribe = React.lazy(() => import("../components/Subscribe"));
const Services = React.lazy(() => import("../components/Services"));
const Footer = React.lazy(() => import("../components/Footer"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>

      <div className="home_container">
        <Navbar />
        <div className="latest">
          <>
            <div className="hero_container">
              <div className="hero_content">
                <div className="line"></div>
                <p>OUR BESTSELLERS</p>
              </div>
              <h3>Latest Arrivals</h3>
              <div className="hero_content">
                <p>SHOP NOW</p>
                <div className="line"></div>
              </div>
            </div>
          </>
          <img src={assets.hero_img} alt="hero" />
        </div>
        <Display_Products display="Latest" sub="Collections" />
        <Display_Products display="Best" sub="Sellers" />
        <Services />
        <Subscribe />
        <Footer />
        <ToastContainer />
      </div>
    </Suspense>
  )
}

export default Home;