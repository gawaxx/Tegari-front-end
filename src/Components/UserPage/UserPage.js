import React, { Component } from 'react';
import './UserPage.css'
import { API, APILINK } from '../API';
import AllPostUser from './AllPostUser';

export class UserPage extends Component {

    state = {
        allPosts: []
    }

    handleClick = () => {
        debugger
    }

    getTheirPost = () => {
        API.GetAPI(`${APILINK}/posts?user_id=${this.props.user.id}`)
            .then(allPosts => this.setState({ allPosts }) )
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user.id !== this.props.user.id) {
        this.getTheirPost()}
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

                    <div className="PostedByThem">
                        {
                            this.state.allPosts.map(post => <AllPostUser post={post} key={post.id} /> )
                        }
                    </div>

                </div>

                <div className="right">
                </div>
            </div>
        );
    }
}

export default UserPage;
