import React, { Component } from 'react';
import { APILINK, API } from '../Components/API.js'
import NormalCard from '../Components/Card/NormalCard.js'
import CreatePost from '../Components/CreatePost.js';
import UrgentCard from '../Components/Card/UrgentCard.js';
import { Link } from 'react-router-dom'
import { Placeholder } from 'semantic-ui-react'



export class CardsContainer extends Component {

    state = {
        nonUrgentPosts: [],
        urgentPosts: [],
        selectedPost: []
    }

    getUNPost = () => {
        (this.props.search.category !== "all") ?
            API.GetAPI(`${APILINK}/posts?title=${this.props.search.value}&category=${this.props.search.category}`).then(posts => this.filterNUPosts(posts))
        :
            API.GetAPI(`${APILINK}/posts?title=${this.props.search.value}`).then(posts => this.filterNUPosts(posts))
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
                    <h2 style={{color: 'black'}} > Urgent Posts </h2>
                    {
                        this.state.urgentPosts.map(post => <Link to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> <UrgentCard key={post.id} post={post} /> </Link>)
                    }
                </div>
                <div className="SearchResultContainer">
                    {
                        this.props.search !== "" ? 
                            <h2 style={{color: 'black'}} > {this.state.nonUrgentPosts.length} results for {this.props.search.value} in {this.props.search.category} </h2>
                        :
                            <h2 style={{color: 'black', textAlign: 'center'}} > You haven't searched for anything! Search for something up there </h2>
                    }
                    {
                        this.state.nonUrgentPosts.map(post => <Link to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> <NormalCard key={post.id} post={post} renderAPost={this.renderAPost} /> </Link> )
                    }
                </div>
                <div className="CreatePostButton">
                    <Link to="/create" style={{ color: 'inherit', textDecoration: 'inherit'}} > <CreatePost /> </Link>
                </div>
            </div>
        )
    }
}

export default CardsContainer;
