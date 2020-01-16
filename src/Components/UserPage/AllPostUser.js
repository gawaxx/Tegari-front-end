import React, { Component } from 'react';

export class AllPostUser extends Component {
    render() {
        const { title, price, postcode, city, image_url, created_at} = this.props.post
        return (
            <div className="Postcard">
                <img src={image_url} alt="the" />
                <div className="PostcardContainer">
                    <h4><b>{title}</b></h4>
                    <p> £{price} <br></br> {postcode}, {city} </p>
                    <p> posted on {created_at.split("T")[0]} </p>
                </div>
            </div>
        );
    }
}

export default AllPostUser;
