import React, { Component } from 'react';

export class CreatePost extends Component {
    render() {
        return (
            <div>
                <div className="cardCreatePostButton">
                    <div className="containerCreatePostButton">
                        <h1> <b> + </b> </h1>
                        <h4><b>Create A post !</b></h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;
