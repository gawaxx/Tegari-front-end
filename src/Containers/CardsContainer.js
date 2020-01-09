import React, { Component } from 'react';
import { APILINK, API } from '../Components/API.js'
import NormalCard from '../Components/Card/NormalCard.js'
import CreatePost from '../Components/CreatePost.js';
import './CardsContainer.css'
import UrgentCard from '../Components/Card/UrgentCard.js';


export class CardsContainer extends Component {

    state = {
        nonUrgentPosts: [],
        urgentPosts: []
    }

    componentDidMount() {
        API.GetAPI(`${APILINK}/posts`).then(posts => this.filterNUPosts(posts))
        API.GetAPI(`${APILINK}/posts`).then(posts => this.filterUPosts(posts))
    }

    filterNUPosts = (posts) => {
        let array = posts.filter(post => post.urgent === false)
        this.setState({nonUrgentPosts: array})
    }

    filterUPosts = posts => {
        let array = posts.filter(post => post.urgent === true)
        this.setState({urgentPosts: array})
    }

    render() {
        return (
            <div className="BigWrapper">
                <div className="UrgentPostContainer">
                    {
                        this.state.urgentPosts.map(post => <UrgentCard key={post.id} post={post} />)
                    }
                </div>
                <div className="SearchResultContainer">
                    {
                        this.state.nonUrgentPosts.map(post => <NormalCard key={post.id} post={post} />)
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
