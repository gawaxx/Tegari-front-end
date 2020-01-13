import React, { Component } from 'react';
import './UserPage.css'


export class AllPostUser extends Component {
    render() {
        const { title, category, price, postcode, address, city, description, image_url, condition, created_at, urgent} = this.props.post
        return (
            <div className="Postcard">
                <img src={image_url} alt="the" />
                <div className="PostcardContainer">
                    <h4><b>{title}</b></h4>
                    <p> £{price}</p>
                </div>
            </div>
        );
    }
}

export default AllPostUser;
