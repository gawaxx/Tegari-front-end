import React, { Component } from 'react';
import UserPage from "../Components/UserPage/UserPage.js";
import { APILINK, API } from '../Components/API.js'
// import { Route } from 'react-router-dom' // Link, Switch


export class UserContainer extends Component {

    state = {
        user: []
    }

    getUser = () => {
        API.GetAPI(`${APILINK}/users/${window.location.href.split("/")[4]}`)
        .then(user => this.setState({user}))
    }

    componentDidMount() {
        this.getUser()
    }

    // handleClick

    render() {
        return (
            <div>
                <UserPage user={this.state.user} />
            </div>
        );
    }
}

export default UserContainer;
