import React, { Component } from 'react';
import { API, APILINK } from '../API';
import AllPostUser from './AllPostUser';
import { Link } from 'react-router-dom'

export class UserPage extends Component {

    state = {
        allPosts: []
    }

    handleClick = () => {
        console.log("repooort")
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
                        <div className="cardscontainer"> 
                            {
                                this.state.allPosts.map(post => <Link to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> <AllPostUser post={post} key={post.id} /> </Link> )
                            }
                        </div>
                    </div>

                    <div className="reportButton">
                        <div></div>
                        <div className="reportContainer" onClick={ () => this.handleClick()}>
                            <h1>Report</h1>
                        </div>
                        <div></div>
                    </div>

                </div>

                <div className="right">
                </div>
            </div>
        );
    }
}

export default UserPage;
