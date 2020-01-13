import React, { Component } from 'react';
import './PostCard.css'

export class PostCard extends Component {

    handleClick = () => {
        this.props.deRenderAPost()
    }
    render() {
        const {category, user_id, id, title, price, postcode, city, description, image_url, condition, created_at} = this.props.post

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

                <div className="sellerInfo"></div>
            
            </div>
        );
    }
}

export default PostCard;
