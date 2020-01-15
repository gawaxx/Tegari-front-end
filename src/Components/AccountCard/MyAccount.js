import React, { Component } from 'react';
import { API, APILINK } from '../API';

export class MyAccount extends Component {

    state = {
        current_user: {}
    }

    // getUserData = () => {
        
    //     API.validateUser(`${APILINK}/validate_user`)
    //     .then(data => {
            
    //         console.log(data.user)
    //         this.setState({current_user: data.user})
    //       });
    // }

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        const {user} = this.props
        return (
            <div>
                <h1> hello {user.user_name}</h1>
            </div>
        );
    }
}

export default MyAccount;
