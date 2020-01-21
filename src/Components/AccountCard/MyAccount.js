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
        current_user: this.props.user,
        allPosts: [],
        savePost: []
    }

    componentDidMount() {
        this.getUserPost()
    }

    getUserPost = () => {
        API.GetAPI(`${APILINK}/users/${this.state.current_user.id}`)
            .then(data => this.setState({ allPosts: data.posts, savePost: data.save_posts }) )
    }

    render() {
        const {user} = this.props
        return (
            <div>
                <div>
                    <h2> Hello {user.user_name}</h2>
                    <div className="allign" >
                        <h2> You have {user.points} points </h2>
                        <Popup trigger={<Button icon='question' />} content='Points are a way to trust other users, earn points by being active!' style={style} inverted />
                    </div>

                    <h2> Your posts </h2>

                    <div className="cardscontainer">
                        {
                            this.state.allPosts.map(post => <Link to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}> <AllPostMyAccount post={post} key={post.id} /> </Link>)
                        }
                    </div>

                    <h2> Post you saved </h2>

                    <div className="cardscontainer">
                        {
                            this.state.savePost.map(post => <Link to={`/posts/${post.post_id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}> <AllPostMyAccount post={() => API.GetAPI(`${APILINK}/posts/${post.post_id}`).then(post => post)} key={post.id} /> </Link>)
                        }
                    </div>

                </div>

                <div>
                    <Button color='purple'>Edit your Account</Button>
                </div>

            </div>
        );
    }
}

export default MyAccount;
