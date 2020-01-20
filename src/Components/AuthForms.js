import React, { useState } from "react";
import { Button, Progress } from 'semantic-ui-react'


const AuthForms = ({ login, signup }) => {
  
  const [loginData, setLoginData] = useState({});
  const [signupData, setSignupData] = useState({});
  const [isLogin, setisLogin] = useState({});
  const [percent, setPercent] = useState(0);

  const increment = () => 
  setPercent((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 17,
  }))

  const handleLoginChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleChange = e => {
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

    <div className="buttonChoice">
      { (isLogin) ?
        <div className="loginSelect">
          <h1 className="login" onClick={ () => setisLogin(true) } > Login </h1>
          <h1 className="signup" onClick={ () => setisLogin(false) } > Signup </h1> 
        </div>
      :
      
        <div className="signupSelect">
          <h1 className="login" onClick={ () => setisLogin(true) }> Login </h1>
          <h1 className="signup" onClick={ () => setisLogin(false) } > Signup </h1> 
          <Progress percent={percent} indicating />
        </div>
      }
      <hr></hr>
    </div>


    <div className="FormContainer">

        {(isLogin) ? 
        <form onSubmit={handleLoginSubmit}>
            <h2>log in</h2>
            <label>
              <input type="email" name="email" placeholder="E-mail" onChange={handleLoginChange} />
              <span> E-mail </span>
            </label>

            <label>
              <input type="password" name="password" placeholder="Password" onChange={handleLoginChange} />
              <span> Password </span>
            </label>

            <input type="submit" />
          </form> 
          
          : 

          <form onSubmit={handleSignupSubmit}>
          <h2>sign up</h2>
          <label>
            <input type="email" name="email" placeholder="E-mail" onChange={ () => increment() } />
            <span> E-mail</span>
          </label>

          <label>
            <input type="password" name="password" placeholder="Password" onChange={() => increment()} />
            <span> Password </span>
          </label>

          <label>
            <input type="password" name="password_confirmation" placeholder="Password confirmation" onChange={() => increment()} />
            <span> Password confirmation</span>
          </label>

          <label>
            <input type="nameofuser" name="nameofuser" placeholder="Your Name" onChange={() => increment()} />
            <span> Your name</span>
          </label>

          <label>
            <input type="familyName" name="familyName" placeholder="Your last name" onChange={() => increment()} />
            <span> Your last name</span>
          </label>

          <label>
            <input type="username" name="username" placeholder="Username" onChange={() => increment()} />
            <span> Username </span>
          </label>

          <input type="submit" />
        </form>
      }


    </div>
    </>
  );
};

export default AuthForms;