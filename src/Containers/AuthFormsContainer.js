import React, { Component } from "react"; //useState, useEffect, 
// import { APILINK, API } from '../Components/API.js'
import AuthForms from '../Components/AuthForms.js'




export class AuthFormsContainer extends Component {


    // setUser(newUserFromBackend);

    render() {
        return (
            <div className="App">
                <nav>
                    {this.props.user && <span>Hello, {this.props.user.email}!</span>}
                </nav>
                {/* {!user ? ( */}
                    {console.log(this.props.handleLogin)}
                    <AuthForms login={this.props.handleLogin} signup={this.props.handleLogin} />
                {/* ) : ( */}
                    {/* <PostForm postPost={API.postPost} /> */}
                )}
            </div>
        );
    }
}

export default AuthFormsContainer;
