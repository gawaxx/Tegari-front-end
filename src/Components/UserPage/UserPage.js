import React, { Component } from 'react';
import './UserPage.css'

export class UserPage extends Component {

    handleClick = () => {
        debugger
    }

    render() {
        const { user_name, name, points } = this.props.user
        return (
            <div className="wrapper" >
                <div className="left">

                </div>

                <div className="center">
                    <div className="username" >
                        <h1> {user_name} </h1> 
                    </div>

                    <h1> Their name: {name} </h1> 
                    <h1> {points} points </h1>
                </div>

                <div className="right">

                </div>
            </div>
        );
    }
}

export default UserPage;
