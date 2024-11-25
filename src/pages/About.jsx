import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Subscribe from "../components/Subscribe"
import { assets } from "../assets/frontend_assets/assets";
import "../css/About.css"

const About = () => {
  return (
    <div className="about_container">
      <Navbar/>
      <hr/>
      <Title title="about" sub="us"/>
      <div className="about_content">
        <div className="about_hero_img">
          <img src={assets.about_img} alt="about"/>
        </div>
        <div className="about_sub_content">
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <h4>Our Mission</h4>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
      <div className="title_about">
        <Title title="why" sub="choose us"/>
      </div>
      <div className="about_choose">
        <div>
          <h4>Quality Assurance:</h4>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div>
          <h4>Convenience:</h4>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div>
          <h4>Exceptional Customer Service:</h4>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <Subscribe />
      <Footer/>
    </div>
  )
}

export default About;