import React, { Component } from 'react';
import { APILINK, API } from '../Components/API.js'
import NormalCard from '../Components/Card/NormalCard.js'
import CreatePost from '../Components/CreatePost.js';
import './CardsContainer.css'
import UrgentCard from '../Components/Card/UrgentCard.js';
import { Link } from 'react-router-dom'


export class CardsContainer extends Component {

    state = {
        nonUrgentPosts: [],
        urgentPosts: [],
        selectedPost: []
    }

    getUNPost = () => {
        API.GetAPI(`${APILINK}/posts?title=${this.props.search}`).then(posts => this.filterNUPosts(posts))
    }

    getUPost = () => {
        API.GetAPI(`${APILINK}/posts`).then(posts => this.filterUPosts(posts))
    }

    componentDidMount() {
        this.getUNPost()
        this.getUPost()
    }

    componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search) {
            this.getUNPost()
        }
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

    deRenderAPost = () => {
        this.setState({ selectedPost: "" })
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
                        this.state.nonUrgentPosts.map(post => <Link to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> <NormalCard key={post.id} post={post} renderAPost={this.renderAPost} /> </Link> )
                    }
                </div>
                <div className="CreatePostButton">
                    <CreatePost />
                </div>
            </div>
        )
    }
}

export default CardsContainer;
