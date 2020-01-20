import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react'
import "./MyAccount.css";
import { API, APILINK } from '../API';
import { Link } from 'react-router-dom' // Link, Switch
import AllPostMyAccount from './AllPostMyAccount';



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
        allPosts: [],
        savePost: []
    }

    componentDidMount() {
        this.props.getUserData()
        this.getUserPost()
        this.getUserSavePost()
    }

    getUserPost = () => {
        API.GetAPI(`${APILINK}/posts?user_id=${this.props.user.id}`)
            .then(allPosts => this.setState({ allPosts }) )
    }

    getUserSavePost = () => {
        API.GetAPI(`${APILINK}/save_posts?user_id=${this.props.user.id}`)
            .then(savePost => this.setState({ savePost }) )
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

                <div className="cardscontainer"> 
                    {
                        this.state.allPosts.map(post => <Link to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> <AllPostMyAccount post={post} key={post.id} /> </Link> )
                    }
                </div>

                <div className="cardscontainer"> 
                    {
                        this.state.savePost.map(post => <Link to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> <AllPostMyAccount post={post} key={post.id} /> </Link> )
                    }
                </div>

            </div>
        );
    }
}

export default MyAccount;
