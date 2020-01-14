import React, { Component } from 'react';
import '../AuthForms.css'

export class PostCreation extends Component {
    render() {
        return (
            <div className="FormContainer">
                <form>
                    <label>
                        <input type="title" name="title" placeholder="Title" />
                        <span> Title </span>
                    </label>

                    <label>
                        <input type="description" name="description" placeholder="Description" />
                        <span> Description </span>
                    </label>

                    <input type="submit" />
                </form> 
            </div>
        );
    }
}

export default PostCreation;
