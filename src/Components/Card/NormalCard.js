import React, { Component } from 'react';

export class NormalCard extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.post)}
            </div>
        );
    }
}

export default NormalCard;
