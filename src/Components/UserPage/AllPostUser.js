import React, { Component } from 'react';

export class AllPostUser extends Component {
    render() {
        const { title, category, price, postcode, address, city, description, image_url, condition, created_at, urgent} = this.props.post
        return (
            <div>
                <h1> hello {title} </h1>
            </div>
        );
    }
}

export default AllPostUser;
