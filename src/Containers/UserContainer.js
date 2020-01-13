import React, { Component } from 'react';
import UserPage from "../Components/UserPage/UserPage.js";
import { Route } from 'react-router-dom' // Link, Switch


export class UserContainer extends Component {

    state = {
        user: []
    }

    getUser = () => {
        
    }

    render() {
        return (
            <div>
                <UserPage user={this.state.user} />
            </div>
        );
    }
}

export default UserContainer;
