import React, { useState, useEffect, Component } from "react";
import { APILINK, API } from '../Components/API.js'
import AuthForms from '../Components/AuthForms.js'

const [user, setUser] = useState(null);

useEffect(() => {
    API.validateUser()
      .then(user => setUser(user))
      .catch(console.error);
  }, []);


export class AuthFormsContainer extends Component {


    // setUser(newUserFromBackend);

    handleLogin = loginData => {
        API.login(`${APILINK}/profile`, loginData).then(user => setUser(user));
    };

    handleSignup = () => {};

    render() {
        return (
            <div className="App">
                <nav>
                    <div>food blog</div>
                    {user && <span>Hello, {user.email}!</span>}
                </nav>
                {/* {!user ? ( */}
                    <AuthForms login={this.handleLogin} signup={this.handleLogin} />
                {/* ) : ( */}
                    {/* <PostForm postPost={API.postPost} /> */}
                {/* )} */}
            </div>
        );
    }
}

export default AuthFormsContainer;
