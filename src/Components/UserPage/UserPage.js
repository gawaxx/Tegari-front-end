import React, { Component } from 'react';

export class UserPage extends Component {
    
    handleClick = () => {
        debugger
    }

    render() {
        return (
            <div onClick={() => this.handleClick()}>
                hello {this.props.user.name}
            </div>
        );
    }
}

export default UserPage;
