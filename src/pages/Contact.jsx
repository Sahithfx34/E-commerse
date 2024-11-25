import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Subscribe from "../components/Subscribe"
import { assets } from "../assets/frontend_assets/assets";
import "../css/Contact.css"

const Contact = () => {
  return (
    <div className="contact_container">
      <Navbar/>
      <hr/>
      <Title title="contact" sub="us"/>
      <div className="contact_content">
        <div className="contact_hero_img">
          <img src={assets.contact_img} alt="about"/>
        </div>
        <div className="contact_sub_content">
          <h3>Our Store</h3>
          <div>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div>
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>
          <h3>Careers at Forever</h3>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button>

        </div>
      </div>
      <Subscribe />
      <Footer/>
    </div>
  )
}

export default Contact;