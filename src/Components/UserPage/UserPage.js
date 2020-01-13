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
                    <div className="TheirInfo">
                        <div className="username" >
                            <h1> {user_name} </h1> 
                        </div>

                        <div className="name" > 
                            <h1> Name: {name} </h1> 
                        </div>
                        
                        <div>
                            <h1> {points} points </h1>
                        </div>
                    </div>
                </div>

                <div className="right">

                </div>
            </div>
        );
    }
}

export default UserPage;
