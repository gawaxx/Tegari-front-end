import React, { Component } from 'react';
import './PostCard.css'
import { APIUSERS, API } from '../API.js'

export class PostCard extends Component {

    state = {
        user: []
    }

    handleClick = () => {
        this.props.deRenderAPost()
    }

    findUser = () => {
        API.GetAPI(`${APIUSERS}/${this.props.post.user_id}`)
        .then(user => this.setState({user}))
    }

    componentDidMount() {
        this.findUser()
    }

    render() {
        const {category, id, title, price, postcode, city, description, image_url, condition, created_at} = this.props.post

        return (
            <div className="wrapper">

                <div className="tips"></div>

                <div className="PostInfo">
                    <p onClick={ () => {this.handleClick()} }>Go Back</p>
                    <img src={image_url}></img>
                    <h1>{title}</h1>
                    <h2>{postcode}, {city}</h2>
                    <p>{category}</p>
                    <p>{condition}</p>
                    <p>{description}</p>
                </div>

                <div className="sellerInfo">
                    <h1>{this.state.user.name}</h1>
                </div>
            
            </div>
        );
    }
}

export default PostCard;
