import Navbar from "../components/Navbar";
import { assets } from "../assets/frontend_assets/assets";
import Latest_Collection from "../components/Latest_Collection";
import "../css/Home.css"
const Home = () => {
  return (
    <div className="home_container">
      <Navbar />

      <div className="latest">
        <div>
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
        </div>
        <img src={assets.hero_img} alt="hero" />
      </div>
      <Latest_Collection/>
    </div>
  )
}

export default Home;