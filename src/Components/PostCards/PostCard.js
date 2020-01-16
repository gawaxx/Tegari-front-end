import React, { Component } from 'react';
import { APIUSERS, APIPOSTS, API } from '../API.js'
import { Link } from 'react-router-dom' // Link, Switch
import { Button, Icon } from 'semantic-ui-react'




export class PostCard extends Component {

    state = {
        user: [],
        post: [],
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    handleClick = () => {
        // this.props.deRenderAPost()
        console.log("Hi")
        window.history.back()
    }

    findUser = () => {
        API.GetAPI(`${APIUSERS}/${this.state.post.user_id}`)
        .then(user => this.setState({user}))
    }

    findPost = () => {
        API.GetAPI(`${APIPOSTS}/${window.location.href.split("/")[4]}`)
        .then(post => this.setState({post}))
    }

    componentDidMount() {
        this.findPost()
    }

    componentDidUpdate() {
        this.findUser()
    }

    render() {
        const {category, title, price, postcode, city, description, image_url, condition, created_at} = this.state.post
        const { user_name, name, points, id } = this.state.user
        return (
            <div className="wrapper">

                <div className="tips">
                    <h3>If it looks too good to be true, it probably is</h3>
                </div>

                <div className="PostInfo">
                    <Button icon labelPosition='left' onClick={ () => {this.handleClick()} } >
                        Go Back
                        <Icon name='left arrow' />
                    </Button>
                    <br></br>
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
