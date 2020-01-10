import React, { Component } from 'react';

export class accountCard extends Component {
    render() {
        return (
            <div>
                <div>
                <div className="Urgentcard">
                    <div className="Urgentcontainer">
                        <h4><b> {this.props.user} </b></h4>
                        <p>  </p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default accountCard;
