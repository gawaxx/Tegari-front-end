import React, { Component } from 'react';
import { APILINK, API } from '../Components/API.js'
import NormalCard from '../Components/Card/NormalCard.js'
import CreatePost from '../Components/CreatePost.js';
import './CardsContainer.css'
import UrgentCard from '../Components/Card/UrgentCard.js';
import PostCard from '../Components/PostCards/PostCard.js';


export class CardsContainer extends Component {

    state = {
        nonUrgentPosts: [],
        urgentPosts: [],
        selectedPost: []
    }

    componentDidMount() {
        API.GetAPI(`${APILINK}/posts`).then(posts => this.filterNUPosts(posts))
        API.GetAPI(`${APILINK}/posts`).then(posts => this.filterUPosts(posts))
    }

    filterNUPosts = (posts) => {
        console.log(posts)
        let array = posts.filter(post => post.urgent === false)
        this.setState({nonUrgentPosts: array})
    }

    filterUPosts = posts => {
        let array = posts.filter(post => post.urgent === true)
        this.setState({urgentPosts: array})
    }

    renderAPost = id => {
        let foundPost = this.state.nonUrgentPosts.find(post => post.id === id)
        this.setState({ selectedPost: foundPost })
        console.log("there")
    }

    render() {
            if (this.state.selectedPost.length === 0) {
                return(
                    <div className="BigWrapper">
                        <div className="UrgentPostContainer">
                            {
                                this.state.urgentPosts.map(post => <UrgentCard key={post.id} post={post} />)
                            }
                        </div>
                        <div className="SearchResultContainer">
                            {
                                this.state.nonUrgentPosts.map(post => <NormalCard key={post.id} post={post} renderAPost={this.renderAPost} />)
                            }
                        </div>
                        <div className="CreatePostButton">
                            <CreatePost />
                        </div>
                    </div>
                )
            }
            else if (this.state.selectedPost.length !== 0 ) {
                return(
                    <div>
                        <PostCard post={this.state.selectedPost}/>
                    </div>
                )
            }

    }
}

export default CardsContainer;
