import React, { Component } from 'react';

export class UserPage extends Component {
    render() {
        return (
            <div>
                hello {this.props.user.name}
            </div>
        );
    }
}

export default UserPage;
