import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMemo } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const useSigninForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const validate = useMemo(() => {
    return () => {
      const errors = [];
      if (!formData.name) {
        errors.push('Name is required');
      } else if (formData.name.length < 2) {
        errors.push('Name must be at least 2 characters long');
      }

      if (!formData.email) {
        errors.push('Email is required');
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.push('Email is invalid');
      }

      if (!formData.password) {
        errors.push('Password is required');
      } else if (formData.password.length < 8 || !/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password) || !/[0-9]/.test(formData.password) || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
        errors.push('Password must be strong');
      }

      return errors;
    };
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length === 0) {
      localStorage.setItem(formData.email, JSON.stringify(formData));
      toast.success('Signup successful! You can now log in.');
      navigate("/login");

    } else {
      validationErrors.forEach((error) => toast.error(error));
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useSigninForm;
