import React, { Component } from 'react';
import { API, APILINK, APIPOSTS } from '../API';

export class PostEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {},
            post: [],
            user: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: {...this.state.value, [event.target.name]: event.target.value} });
    }

    getThePost = () => {
        API.GetAPI(`${APILINK}/posts/${window.location.href.split("/")[4]}`)
            .then(data => this.setState({ post: data[0], user: data[1], value: data[0] }) )
    }

    componentDidMount() {
        this.getThePost()
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const patchData = {
            post: this.state.value
        }

        API.PatchAPI(APIPOSTS, patchData).then(this.props.redirectToPostPage(this.state.post.id))
    }


    render() {
        const { title, image_url, description, price, postcode, city } = this.state.value
        return (
            <div className="CreateAPost" >
                <div className="FormContainer">
                    <form onSubmit={(e) => this.handleSubmit(e)} className="whatever">
                        <label>
                            <input type="title" name="title" placeholder="Title" value={title} onChange={(e) => this.handleChange(e)}/>
                            <span> Title </span>
                        </label>

                        <label>
                            <input alt="no" name="image_url" placeholder="Image" value={image_url} onChange={(e) => this.handleChange(e)} />
                            <span> Image </span>
                        </label>

                        <label>
                            <input type="description" name="description" placeholder="Description" value={description} onChange={(e) => this.handleChange(e)} />
                            <span> Description </span>
                        </label>

                        <label>
                            <input type="price" name="price" placeholder="Price" value={price} onChange={(e) => this.handleChange(e)} />
                            <span> Price </span>
                        </label>

                        <label>
                            <input type="postalcode" name="postcode" placeholder="Postal Code" value={postcode} onChange={(e) => this.handleChange(e)} />
                            <span> Postal Code </span>
                        </label>

                        <label>
                            <input type="email" name="email" placeholder="E-mail" onChange={(e) => this.handleChange(e)} />
                            <span> E-mail </span>
                        </label>

                        <label>
                            <input type="city" name="city" placeholder="City" value={city} onChange={(e) => this.handleChange(e)} />
                            <span> City </span>
                        </label>

                        <label>
                            <input type="phonenumber" name="phonenumber" placeholder="Phone Number" onChange={(e) => this.handleChange(e)} />
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
