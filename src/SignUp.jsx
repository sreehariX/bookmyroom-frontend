import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'

function SignUp() {

    const navigate = useNavigate();
    
    return(
<div className="body">
     <div className="container" id="container">
         <div className="form-container sign-up">
             <form action="register.php" method="post">
                 <h1>Create Account</h1>
                 <div className="social-icons">
                     <a href="#" className="icons"><i className='bx bxl-google'></i></a>
                     <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
                     <a href="#" className="icons"><i className='bx bxl-github'></i></a>
                     <a href="#" className="icons"><i className='bx bxl-linkedin'></i></a>
                 </div>
                 <span>Register with E-mail</span>
                 <input type="text" placeholder="Name" name="name" />
                 <input type="email" placeholder="Enter E-mail" name="email" />
                 <input type="password" placeholder="Enter Password" name="password" />
                 <button type="submit">Sign Up</button>
             </form>
         </div>
 
         <div className="form-container sign-in">
             <form action="login.php" method="post">
                 <h1>Sign In</h1>
                 <div className="social-icons">
                     <a href="#" className="icons"><i className='bx bxl-google'></i></a>
                     <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
                     <a href="#" className="icons"><i className='bx bxl-github'></i></a>
                     <a href="#" className="icons"><i className='bx bxl-linkedin'></i></a>
                 </div>
                 <span>Login With Email & Password</span>
                 <input type="email" placeholder="Enter E-mail" name="email" required />
                 <input type="password" placeholder="Enter Password" name="password" required />
                 <a href="#">Forgot Password?</a>
                 <button type="submit">Sign In</button>
             </form>
         </div>
 
         <div className="toggle-container">
             <div className="toggle">
                 <div className="toggle-panel toggle-left">
                     <h1>Welcome To <br/>The Catalyst Project</h1>
                     <p>Sign in With ID & Password</p>
                     <button className="hidden" id="login">Sign In</button>
                 </div>
                 <div className="toggle-panel toggle-right">
                     <h1>If you haven't Registered</h1>
                     <p>Register here and be a part of our Community</p>
                     <button className="hidden" id="register">Sign Up</button>
                 </div>
             </div>
         </div>
     </div>
    </div>
    );
 }

 export default SignUp
 