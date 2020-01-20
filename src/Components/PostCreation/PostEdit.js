import React, { Component } from 'react';
import { API, APILINK } from '../API';

export class PostEdit extends Component {
    state = {
        post: []
    }

    getThePost = () => {
        API.GetAPI(`${APILINK}/posts/${window.location.href.split("/")[4]}`)
            .then(data => this.setState({ post: data[0] }) )
    }

    componentDidMount() {
        this.getThePost()
    }


    render() {
        return (
            <div>
                hi {this.state.post.title}
            </div>
        );
    }
}

export default PostEdit;
