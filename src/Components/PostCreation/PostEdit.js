import React, { Component } from 'react';
import { API, APILINK } from '../API';

export class PostEdit extends Component {
    state = {
        post: []
    }

    getThePost = () => {
        debugger
        API.GetAPI(`${APILINK}/posts?id=${window.location.href.split("/")[4]}`)
            .then(post => this.setState({ post }) )
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
