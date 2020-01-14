import React, { Component } from 'react';
import '../AuthForms.css'

export class PostCreation extends Component {
    render() {
        return (
            <div className="FormContainer">
                <form>
                    <h2>Create a post</h2>
                    <label>
                        <input type="title" name="title" placeholder="Title" />
                        <span> Title </span>
                    </label>

                    <label>
                        <input type="password" name="password" placeholder="Password" />
                        <span> Password </span>
                    </label>

                    <input type="submit" />
                </form> 
            </div>
        );
    }
}

export default PostCreation;
