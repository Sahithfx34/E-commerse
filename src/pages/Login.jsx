import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
 import useLoginForm from "../hooks/useLoginForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Profile.css";
import { NavLink } from "react-router-dom";


const Login = () => {
  const { formData, handleChange, handleSubmit } = useLoginForm();

  return (
    <div className="login_container">

      <Navbar />
      <div className="login_form">
        <div className="login_title">
          <h3>Login</h3>
          <div className="line"></div>
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          
          <div className="login_links">
            <p>Forgot your password?</p>
            <NavLink to="/signin"><p>Create account</p></NavLink>
          </div>

          <button className="btn" onClick={handleSubmit}>Login</button>

        </div>
      </div>
      <Footer />
      <ToastContainer /> 
    </div>
  );
};

export default Login;


