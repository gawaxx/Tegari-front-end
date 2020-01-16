import React, { Component } from 'react';
import '../AuthForms.css'
import { APIPOSTS, API } from '../API.js'


export class PostCreation extends Component {

    state = {
        userid: {}
    } 

    // handleChange(event) {
    //     // this.setState({value: event.target.value});
    //     console.l
    // }

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
        let price = event.target.price.value
        if (this.props.user !== {}) {
            // debugger
            this.setState({userid: this.props.user.id})
        } else {
            this.setState({userid: 172})
        }
        // debugger
        const postData = {
            title: title,
            description: desc,
            postcode: postalCode,
            email: email,
            city: city,
            phone_number: phonenum,
            condition: condition,
            category: cat,
            image_url: image,
            price: price,
            user_id: this.state.userid
        }
        API.PostAPI(APIPOSTS, postData)
    }


    render() {
        return (
            <div className="CreateAPost" >
                <img src="https://via.placeholder.com/250" alt="placeholder" />
                <div className="FormContainer">
                    <form onSubmit={(e) => this.handleSubmit(e)} className="whatever">
                        <label>
                            <input type="title" name="title" placeholder="Title" />
                            <span> Title </span>
                        </label>

                        <label>
                            <input alt="no" name="image" placeholder="Image" />
                            <span> Image </span>
                        </label>

                        <label>
                            <input type="description" name="description" placeholder="Description" />
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

                        <input className="ag" type="submit" value="Post Your ad !"/>

                    </form> 
                </div>
            </div>
        );
    }
}

export default PostCreation;
