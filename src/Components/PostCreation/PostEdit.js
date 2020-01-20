import React, { Component } from 'react';
import { API, APILINK } from '../API';

export class PostEdit extends Component {
    state = {
        post: []
    }

    getThePost = () => {
        API.GetAPI(`${APILINK}/posts/${window.location.href.split("/")[4]}`)
            .then(data => this.setState({ post: data[0] }) )
    }

    componentDidMount() {
        this.getThePost()
    }


    render() {
        const { title, image_url, description } = this.state.post
        return (
            <div className="CreateAPost" >
                <img src="https://via.placeholder.com/250" alt="placeholder" />
                <div className="FormContainer">
                    <form onSubmit={(e) => this.handleSubmit(e)} className="whatever">
                        <label>
                            <input type="title" name="title" placeholder="Title" value={title} />
                            <span> Title </span>
                        </label>

                        <label>
                            <input alt="no" name="image" placeholder="Image" value={image_url} />
                            <span> Image </span>
                        </label>

                        <label>
                            <input type="description" name="description" placeholder="Description" value={description} />
                            <span> Description </span>
                        </label>

                        <label>
                            <input type="price" name="price" placeholder="Price" />
                            <span> Price </span>
                        </label>

                        <label>
                            <input type="postalcode" name="postalcode" placeholder="Postal Code" />
                            <span> Postal Code </span>
                        </label>

                        <label>
                            <input type="email" name="email" placeholder="E-mail" />
                            <span> E-mail </span>
                        </label>

                        <label>
                            <input type="city" name="city" placeholder="City" />
                            <span> City </span>
                        </label>

                        <label>
                            <input type="phonenumber" name="phonenumber" placeholder="Phone Number" />
                            <span> Phone Number </span>
                        </label>

                        <label>
                            <select id="condition" >
                                <option value="New">New</option>
                                <option value="Almostnew">Almost new</option>
                                <option value="Used">Used</option>
                                <option value="Veryused">Very used</option>
                            </select>
                        </label>

                        <label>
                            <select id="categories" >
                                <option value="electronic">electronic</option>
                                <option value="furniture">furniture</option>
                                <option value="entertainment">entertainment</option>
                            </select>
                        </label>

                        <input className="ag" type="submit" value="Edit Your ad !"/>

                    </form> 
                </div>
            </div>
        );
    }
}

export default PostEdit;
