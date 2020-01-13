import React, { Component } from 'react';
import './UserPage.css'
import { API, APILINK } from '../API';
import AllPostUser from './AllPostUser';

export class UserPage extends Component {

    state = {
        alloftheirPosts: []
    }

    handleClick = () => {
        debugger
    }

    getTheirPost = () => {
        API.GetAPI(`${APILINK}/posts?user_id=${this.props.user.id}`)
    }

    componentDidMount() {
        this.getTheirPost()
        .then(alloftheirPosts => this.setState({ alloftheirPosts }))
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
                            this.state.alloftheirPosts.map(post => {
                                return <AllPostUser post={post} />
                            })
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
