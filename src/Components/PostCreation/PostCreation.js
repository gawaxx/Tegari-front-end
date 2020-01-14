import React, { Component } from 'react';
import '../AuthForms.css'

export class PostCreation extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let title = event.target.title.value
        let desc = event.target.description.value
        let postalCode = event.target.postalcode.value
        let email = event.target.email.value
        let city = event.target.city.value 
        let phonenum = event.target.phonenumber.value 
        let condition = event.target.condition.value 
        let cat = event.target.categories.value
        let image = event.target.image.value
        const postData = {
            title: title,
            description: desc,
            postcode: postalCode,
            email: email,
            city: city,
            phone_number: phonenum,
            condition: condition,
            category: cat,
            image_url: image
        }
        console.log(event.target)
    }


    render() {
        return (
            <div>
                <img src="https://via.placeholder.com/250" alt="placeholder" />
                <div className="FormContainer">
                    <form onSubmit={(e) => this.handleSubmit(e) }>
                        <label>
                            <input type="title" name="title" placeholder="Title" />
                            <span> Title </span>
                        </label>

                        <label>
                            <input type="image" alt="no" name="image" placeholder="Image" />
                            <span> Image </span>
                        </label>

                        <label>
                            <input type="description" name="description" placeholder="Description" />
                            <span> Description </span>
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
                            <select id="condition" onChange={this.handleChange}>
                                <option value="New">New</option>
                                <option value="Almostnew">Almost new</option>
                                <option value="Used">Used</option>
                                <option value="Veryused">Very used</option>
                            </select>
                        </label>

                        <label>
                            <select id="categories" onChange={this.handleChange}>
                                <option value="electronic">electronic</option>
                                <option value="furniture">furniture</option>
                                <option value="entertainment">entertainment</option>
                            </select>
                        </label>

                        <input type="submit" value="Post Your ad !"/>
                    </form> 
                </div>
            </div>
        );
    }
}

export default PostCreation;
