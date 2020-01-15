import React, { Component } from 'react';
import { API, APILINK } from '../API';

export class MyAccount extends Component {

    state = {
        current_user: {}
    }

    getUserData = () => {
        API.validateUser(`${APILINK}/validate_user`)
    }

    componentDidMount() {
        this.getUserData()
    }

    render() {
        return (
            <div>
                <h1> hello </h1>
            </div>
        );
    }
}

export default MyAccount;
