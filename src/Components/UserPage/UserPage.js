import React, { Component } from 'react';

export class UserPage extends Component {

    handleClick = () => {
        debugger
    }

    render() {
        const { user_name, name, points } = this.props.user
        return (
            <div>
                <h1>You are currently viewing the profile of: {user_name} </h1> 
                <h1> Their name: {name} </h1> 
                <h1> {points} points </h1>
            </div>
        );
    }
}

export default UserPage;
