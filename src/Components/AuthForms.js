import React, { useState } from "react";
import './AuthForms.css'

const AuthForms = ({ login, signup }) => {
  
  const [loginData, setLoginData] = useState({});
  const [signupData, setSignupData] = useState({});

  const handleLoginChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupChange = e => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    login(loginData);
  };

  const handleSignupSubmit = e => {
    if (e.target.password.value === e.target.password_confirmation.value) {
      e.preventDefault();
      let signUpData = {
        email: signupData.email,
        password: e.target.password.value,
        name: e.target.nameofuser.value,
        familyName: e.target.familyName.value,
        username: e.target.username.value
      }
      signup(signUpData)
    }
    else {
      e.preventDefault()
      console.log("Passwords don't match")
    }
  }

  return (
    <>
    <div className="FormContainer">
        <form onSubmit={handleLoginSubmit}>
          <h2>log in</h2>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleLoginChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleLoginChange}
          />
          <input type="submit" />
        </form>
        or
        <form onSubmit={handleSignupSubmit}>
          <label>
            <h2>sign up</h2>
            <input type="email" name="email" placeholder="E-mail" onChange={handleSignupChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleLoginChange} />
            <input type="password" name="password_confirmation" placeholder="Password confirmation" onChange={handleLoginChange} />
            <input type="nameofuser" name="nameofuser" placeholder="Your Name" onChange={handleSignupChange} />
            <input type="familyName" name="familyName" placeholder="Your last name" onChange={handleSignupChange} />
            <input type="username" name="username" placeholder="Username" onChange={handleSignupChange} />
            <input type="submit" />
          </label>
        </form>
    </div>
    </>
  );
};

export default AuthForms;