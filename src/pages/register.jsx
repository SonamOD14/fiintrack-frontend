import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
  
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
  
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
  
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("All fields are required");
      return;
    }

    if (!validateForm()) return;

    toast.success("Registration successful!");
    console.log("Form Data:", formData);
  };

  return (
    <>
      <style>{`
        .register-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f0f4f8;
          padding: 20px;
        }
        .register-card {
          background: white;
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 420px;
          box-sizing: border-box;
          transition: box-shadow 0.3s ease;
        }
        .register-card:hover {
          box-shadow: 0 12px 36px rgba(0,0,0,0.15);
        }
        .register-title {
          margin-bottom: 25px;
          font-size: 28px;
          font-weight: 700;
          color: #222;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        input {
          padding: 14px 16px;
          margin-bottom: 18px;
          border: 1.8px solid #d1d9e6;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        input:focus {
          outline: none;
          border-color: #4a90e2;
          box-shadow: 0 0 6px rgba(74, 144, 226, 0.5);
        }
        button {
          background-color: #4a90e2;
          color: white;
          border: none;
          padding: 14px 0;
          font-size: 18px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin-top: 10px;
        }
        button:hover {
          background-color: #357abd;
        }
        .login-link {
          margin-top: 18px;
          text-align: center;
          font-size: 14px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #555;
        }
        .login-link a {
          color: #4a90e2;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .login-link a:hover {
          color: #357abd;
          text-decoration: underline;
        }
        @media (max-width: 480px) {
          .register-card {
            padding: 30px 20px;
          }
          .register-title {
            font-size: 24px;
          }
          input {
            font-size: 14px;
          }
          button {
            font-size: 16px;
          }
        }
      `}</style>
      <div className="register-wrapper">
        <div className="register-card" role="main">
          <h2 className="register-title">Create Account</h2>

          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Full Name"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email Address"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              aria-label="Password"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              aria-label="Confirm Password"
            />

            <button type="submit" aria-label="Register">Register</button>
          </form>

          <p className="login-link">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;