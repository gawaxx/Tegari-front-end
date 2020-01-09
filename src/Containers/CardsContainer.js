import React, { Component } from 'react';
import { APILINK, API } from '../Components/API.js'
import NormalCard from '../Components/Card/NormalCard.js'
import CreatePost from '../Components/CreatePost.js';
import './CardsContainer.css'


export class CardsContainer extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        API.GetAPI(`${APILINK}/posts`).then(posts => this.setState({ posts }))
    }

    render() {
        return (
            <div className="BigWrapper">
                <div className="UrgentPostContainer">
                    urgent post
                </div>
                <div className="SearchResultContainer">
                    {
                        this.state.posts.map(post => <NormalCard key={post.id} post={post} />)
                    }
                </div>
                <div className="CreatePostButton">
                    <CreatePost />
                </div>
            </div>
        );
    }
}

export default CardsContainer;
