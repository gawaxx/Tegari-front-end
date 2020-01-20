import React, { Component } from 'react';
import { API, APILINK } from '../API';

export class PostEdit extends Component {
    state = {
        post: []
    }

    getThePost = () => {
        API.GetAPI(`${APILINK}/posts?id=${window.location.href.split("/")[4]}`)
            .then(post => this.setState({ post }) )
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user.id !== this.props.user.id) {
        this.getThePost()}
    }



    render() {
        return (
            <div>
                hi
            </div>
        );
    }
}

export default PostEdit;
