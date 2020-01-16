import React, { Component } from 'react';

export class UrgentCard extends Component {
    render() {
        // category, user_id, id, postcode, city, condition, created_at
        const {title, price, description, image_url } = this.props.post
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
