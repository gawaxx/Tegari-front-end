import React, { Component } from 'react';
import './NormalCard.scss'

export class NormalCard extends Component {

    handleClick = () => {
        this.props.renderAPost(this.props.post.id)
    }

    render() {
        const {category, user_id, id, title, price, postcode, city, description, image_url, condition, created_at} = this.props.post

        return (
            <div>
                <div className="blog-card" onClick={ () => this.handleClick()}>
                    <div className="meta">
                    <div className="photo">
                        <img alt="placholder" src={image_url}></img>
                    </div>
                    <ul className="details">
                        <li className="author"><a href="/"> {user_id} </a></li>
                        <li className="date"> {created_at} </li>
                        <li className="tags">
                        <p>{category}</p>
                        <p> Post ID: {id}</p>
                        <ul>
                            <li><a href="/">HTML</a></li>
                            <li><a href="/">CSS</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    <div className="description">
                    <h1> Selling a {title}  </h1>
                    <h2> Condition: {condition} | {postcode}({city}) </h2>
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
