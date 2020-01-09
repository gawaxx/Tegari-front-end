import React, { Component } from 'react';
import { APILINK, API } from '../Components/API.js'
import NormalCard from '../Components/Card/NormalCard.js'


export class CardsContainer extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        API.GetAPI(`${APILINK}/users`).then(posts => this.setState({ posts }))
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => <NormalCard key={post.id} post={post} />)
                }
            </div>
        );
    }
}

export default CardsContainer;
