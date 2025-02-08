SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import api from "./api/axios";

function SignUp() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login/", {
        username: formData.name,
        password: formData.password,
      });

      if (response.data.access) {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        navigate("/home");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/register/", {
        username: formData.name,
        email: formData.email,
        password: formData.password,
        password2: formData.password,
      });

      if (response.data.message == "Registration successful") {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setIsSignUp(false); // Switch to login form
        setError("Registration successful! Please login.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError("");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="body">
      <div className={`container ${isSignUp ? 'active' : ''}`}>
        <div className="form-container sign-up">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Name" 
                name="name" 
                value={formData.name}
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                placeholder="Enter E-mail" 
                name="email" 
                value={formData.email}
                onChange={handleChange} 
                required 
              />
              <input 
                type="password" 
                placeholder="Enter Password" 
                name="password" 
                value={formData.password}
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleSignIn}>
            <h1>Welcome Back</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="input-group">
              <input 
                type="name" 
                placeholder="Enter Username" 
                name="name" 
                value={formData.name}
                onChange={handleChange} 
                required 
              />
              <input 
                type="password" 
                placeholder="Enter Password" 
                name="password" 
                value={formData.password}
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Already have an account? Sign in to access your account</p>
              <button className="hidden" onClick={toggleForm}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all site features</p>
              <button className="hidden" onClick={toggleForm}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
