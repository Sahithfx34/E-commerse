import React, { Suspense } from "react";
import useLoginForm from "../hooks/useLoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Profile.css";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";

const Navbar = React.lazy(() => import("../components/Navbar"));
const Footer = React.lazy(() => import("../components/Footer"));


const Login = () => {
  const { formData, handleChange, handleSubmit } = useLoginForm();

  return (
    <Suspense fallback={<Loading/>}>

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
    </Suspense>
  );
};

export default Login;


