import React, { Component } from 'react';
import './NormalCard.scss'

export class NormalCard extends Component {
    render() {
        const {address, category, user_id, id, price, postcode, city, description, image, condition, created_at} = this.props.post
        return (
            <div>
                {console.log(this.props.post)}
                <div className="blog-card">
                    <div className="meta">
                    <div className="photo">
                        <img alt="placholder" src="https://via.placeholder.com/300x240"></img>
                    </div>
                    <ul className="details">
                        <li className="author"><a href="/"> {user_id} </a></li>
                        <li className="date"> {created_at} </li>
                        <li className="tags">
                        <p>{category}</p>
                        <ul>
                            <li><a href="/">Code</a></li>
                            <li><a href="/">HTML</a></li>
                            <li><a href="/">CSS</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    <div className="description">
                    <h1> Title PlaceHolder </h1>
                    <h2> Condition: {condition}      ||      {postcode}({city}) </h2>
                    <p> {description} </p>
                    <p className="read-more">
                        <a href="/">Price £{price} </a>
                    </p>
                    </div>
                </div>
  
            </div>
        );
    }
}

export default NormalCard;
