import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
// import { API, APILINK } from '../API';

export class MyAccount extends Component {

    state = {
        current_user: {}
    }

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        const {user} = this.props
        return (
            <div>
                <h1> hello {user.user_name}</h1>
                <div className="logoutbutton">
                    <h2 onClick={() => this.props.logOut() }> Logout </h2>
                </div>
            </div>
        );
    }
}

export default MyAccount;
