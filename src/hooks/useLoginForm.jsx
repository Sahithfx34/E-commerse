import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMemo,useCallback } from "react";
import "react-toastify/dist/ReactToastify.css";

const useLoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(() => {
      const stored = JSON.parse(localStorage.getItem("isSubmitted"));
      return stored ? stored : { loggedIn: false, email: "" };
  }); 
  const navigate = useNavigate();

  const validate = useMemo(() => {
    return () => {
      const errors = [];
      if (!formData.email) {
        errors.push("Email is required");
      }
      if (!formData.password) {
        errors.push("Password is required");
      }
      return errors;
    };
  }, [formData.email, formData.password]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      const validationErrors = validate();
      if (validationErrors.length === 0) {
          const storedUser = JSON.parse(localStorage.getItem(formData.email)); // Assuming email is the key in localStorage

          if (storedUser && storedUser.password === formData.password) {
              setIsSubmitted({ loggedIn: true, email: formData.email });
              localStorage.setItem(
                  "isSubmitted",
                  JSON.stringify({ loggedIn: true, email: formData.email })
              ); 
              toast.success("Login successful!");
              navigate("/"); 
          } else {
              toast.error("Invalid email or password");
          }
      } else {
          validationErrors.forEach((error) => toast.error(error));
      }
  };

  const handleLogout = useCallback(() => {
    setIsSubmitted({ loggedIn: false, email: "" });
    localStorage.removeItem("isSubmitted");
    toast.success("Logged out successfully!");
    navigate("/login"); // Redirect to login page
  }, [navigate]);

  return {
      formData,
      handleChange,
      handleSubmit,
      isSubmitted, 
      handleLogout
  };
};

export default useLoginForm;
