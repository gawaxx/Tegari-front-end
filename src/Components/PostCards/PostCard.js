import React, { Component } from 'react';
import './PostCard.css'
import { APIUSERS, API } from '../API.js'
import { Link } from 'react-router-dom' // Link, Switch


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
        const {category, title, price, postcode, city, description, image_url, condition, created_at} = this.props.post
        const { user_name, name, points, id } = this.state.user
        return (
            <div className="wrapper">

                <div className="tips">
                    <h3>If it looks too good to be true, it probably is</h3>
                </div>

                <div className="PostInfo">
                    <p onClick={ () => {this.handleClick()} }>Go Back</p>
                    <img src={image_url} alt="post" ></img>
                    <h1>{title}, £{price}</h1>
                    <h2>{postcode}, {city}</h2>
                    <p>{category}</p>
                    <p>condition: {condition}</p>
                    <p>{description}</p>
                </div>

                <div className="sellerInfo">
                    <Link to={`/users/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} >
                        <h1>Username: {user_name}</h1>
                    </Link>
                    <h2>Posted by: {name} </h2>
                    <h2>Points: {points} </h2>
                    <p> posted at {created_at} </p>
                </div>
            
            </div>
        );
    }
}

export default PostCard;
