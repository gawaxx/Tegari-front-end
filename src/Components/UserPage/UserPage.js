import React, { Component } from 'react';
import { API, APILINK } from '../API';
import AllPostUser from './AllPostUser';
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'


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
        const { user_name, name, points, created_at } = this.props.user
        return (
            <div className="wrapper" >
                <div className="left">

                </div>

                <div className="center">

                    <div className="PostedByThem">
                        <div className="cardscontainer"> 
                            {
                                this.state.allPosts.map(post => <Link to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> <AllPostUser post={post} key={post.id} /> </Link> )
                            }
                        </div>
                    </div>

                </div>

                <div className="right">
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

                        <Card>
                            <Card.Content header={`${user_name}'s profile`} />
                            <Card.Content extra>
                                Name: {name}
                                <br></br>
                                Account created {created_at}
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='user' />4 Friends
                            </Card.Content>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPage;
