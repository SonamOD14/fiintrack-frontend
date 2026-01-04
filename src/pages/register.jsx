import React, { useState } from "react";
import toast from "react-hot-toast";
import { createUserApi } from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSubmit = {
        username: formData.name,
        email: formData.email,
        password: formData.password,
      };
      const response = await createUserApi(dataToSubmit)
      if (response?.data?.success) {
        toast.success("Registration successful");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast.error(response?.data?.message || "Registration failed");
      }
    }
    catch (error) {
      toast.error("An error occurred during registration");
    }

  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;