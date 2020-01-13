import React, { Component } from 'react';

export class AllPostUser extends Component {
    render() {
        const {category, price, postcode, address, city, description, image_url, condition, created_at, urgent} = this.props.post
        return (
            <div>
                
            </div>
        );
    }
}

export default AllPostUser;
