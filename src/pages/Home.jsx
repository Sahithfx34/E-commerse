import Navbar from "../components/Navbar";
import { assets } from "../assets/frontend_assets/assets";
import "../css/Home.css"
import Display_Products from "../components/Display_Products";
import Subscribe from "../components/Subscribe";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
const Home = () => {
  return (
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
      <Display_Products display="Latest" sub ="Collections"/>
      <Display_Products display="Best" sub="Sellers"/>
      <Services/>
      <Subscribe />
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default Home;