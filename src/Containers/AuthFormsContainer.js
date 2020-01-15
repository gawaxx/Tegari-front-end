import React, { Component } from "react"; //useState, useEffect, 
import {withRouter} from 'react-router'
import { APILINK, API } from '../Components/API.js'
import AuthForms from '../Components/AuthForms.js'




 class AuthFormsContainer extends Component {

    handleLogin = loginData => {
        API.login( `${APILINK}/login`, loginData).then(() => {this.props.history.push('/my_profile')}); //debugger
    };

    render() {
        return (
            <div className="App">
                {/* {!user ? ( */}
                    <AuthForms login={this.handleLogin} signup={this.props.handleSignup} />
                {/* ) : ( */}
                    {/* <PostForm postPost={API.postPost} /> */}
                {/* )} */}
            </div>
        );
    }
}

export default withRouter(AuthFormsContainer);