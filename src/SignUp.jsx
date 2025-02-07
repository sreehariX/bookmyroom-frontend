import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/home"); // Redirect to HomePage after sign-in
  };

  return (
    <div className="body">
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleSignIn}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Enter E-mail" name="email" required />
            <input type="password" placeholder="Enter Password" name="password" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            <input type="email" placeholder="Enter E-mail" name="email" required />
            <input type="password" placeholder="Enter Password" name="password" required />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
