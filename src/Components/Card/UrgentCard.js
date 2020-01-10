import React, { Component } from 'react';
import '../Component.css'

export class UrgentCard extends Component {
    render() {
        const {category, user_id, id, title, price, postcode, city, description, image_url, condition, created_at} = this.props.post
        return (
            <div>
                <div className="Urgentcard">
                    <img className="urgentimg" src={image_url} alt="urgent card" />
                    <div className="Urgentcontainer">
                        <h4><b>{title} - £{price} </b></h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UrgentCard;
