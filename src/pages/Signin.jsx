import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Profile.css";
import useSigninForm from "../hooks/useSigninForm";

const Signin = () => {

  const { formData, handleChange, handleSubmit } = useSigninForm();
  
  return (
    <div className="login_container">
      <Navbar />
      <div className="login_form">
        <div className="login_title">
          <h3>Sign up</h3>
          <div className="line"></div>
        </div>
        <div>

          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"/>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />

          <div className="login_links">
            <p>Forgot your password?</p>
            <NavLink to="/login"><p>Login Here</p></NavLink>
          </div>

          <button className="btn" onClick={handleSubmit}>Sign up</button>
          
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Signin;