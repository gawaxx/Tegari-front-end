import React, { Component } from 'react';

export class PostCard extends Component {
    render() {
        const {category, user_id, id, title, price, postcode, city, description, image_url, condition, created_at} = this.props.post

        return (
            <div>
                <h1>title</h1>
                <h2>postcode, city</h2>
                <p>category</p>
            </div>
        );
    }
}

export default PostCard;
