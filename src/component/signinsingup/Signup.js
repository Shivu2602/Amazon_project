// Write an "rafce" then automatically  adding the function and export default
// This is a meaning of "rafce" is "React functional component with arrow function and export default"

import React, { useState } from "react";
import logoimage from './amazonlogo.png'
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validatePasswords = () => {
    if (password !== cpassword) {
      return "Passwords do not match";
    }

    return null;
  };

  return (
    <>
      <section>
        <div className="log_container">
          <div className="log_header">
            <NavLink to="/"><img src={logoimage} alt="Logo" /></NavLink>
          </div>
          <div className="log_form">
            <form action="">
              <h1>Sign In</h1>
              <div className="input_data">
                <label htmlFor="">Your Name</label>
                <input type="text" name="fname" id="fname" required />
              </div>

              <div className="input_data">
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" required />
              </div>

              <div className="input_data">
                <label htmlFor="">Mobile</label>
                <input type="number" name="mobile" id="mobile" required />
              </div>

              <div className="input_data">
                <label htmlFor="">Password</label>
                <input type="password" name="password"  id="password" onChange={handlePasswordChange} required />
              </div>

              <div className="input_data">
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="cpassword" id="cpassword" onChange={handleConfirmPasswordChange} required />
                <span>{validatePasswords()}</span>
              </div>
              <button className='signin_btn'>Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>

      
    </>
  )
};

export default Signup;