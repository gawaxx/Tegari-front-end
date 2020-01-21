import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

export class CreatePost extends Component {

    handleClick = () => {
    }

    render() {
        return (
            <div>
                <div className="cardCreatePostButton" onClick={() => this.handleClick()} >
                    <div className="containerCreatePostButton">
                        <Icon className="plus square" />
                        <h4><b>Create A post !</b></h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;
