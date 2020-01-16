import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react'

import "./MyAccount.css";
import { API, APILINK } from '../API';


// import { Redirect } from 'react-router-dom'
// import { API, APILINK } from '../API';

const style = {
    borderRadius: 0,
    opacity: 1,
    padding: '2em',
  }

export class MyAccount extends Component {

    state = {
        current_user: {},
        allPosts: []
    }

    componentDidMount() {
        this.props.getUserData()
    }

    getUserPost = () => {
        API.GetAPI(`${APILINK}/posts?user_id=${this.props.user.id}`)
            .then(allPosts => this.setState({ allPosts }) )
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user.id !== this.props.user.id) {
        this.getTheirPost()}
    }

    render() {
        const {user} = this.props
        return (
            <div>
                <h1> hello {user.user_name}</h1>
                <div className="allign" >
                    <h2> You have {user.points} points </h2>
                    <Popup trigger={<Button icon='question' />} content='Points are a way to trust other users, earn points by being active!' style={style} inverted />
                </div>

            </div>
        );
    }
}

export default MyAccount;
