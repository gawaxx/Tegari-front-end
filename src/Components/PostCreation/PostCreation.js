import React, { Component } from 'react';
import { APIPOSTS, API, APILINK } from '../API.js'
import { Dropdown } from 'semantic-ui-react'


const conditionOptions = [
    { key: 1, text: 'New', value: "new" },
    { key: 2, text: 'Mostly New', value: "mostly_new" },
    { key: 3, text: 'Used', value: "used" },
    { key: 4, text: 'Very used', value: "very_used" },
]

const categoryOptions = [
    { key: 1, text: 'Furniture', value: "furniture" },
    { key: 2, text: 'Electronic', value: "electronic" },
    { key: 3, text: 'Entertainment', value: "entertainment" },
]


export class PostCreation extends Component {

    state = {
        userid: 172,
        conditionCat: "",
        category: "",
    } 

    handleConditionChange = (e, value) => {
        this.setState({ conditionCat: (value.value)} )
    }

    handleCategoryChange = (e, value) => {
        this.setState({ category: (value.value)} )
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
        let condition = this.state.conditionCat
        let cat = event.target.categories.value
        let image = event.target.image.value
        let price = event.target.price.value
        if (this.props.user !== null) {
            this.setState({userid: this.props.user.id}, function () {

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

                API.GetAPI(`${APILINK}/users/${this.props.user.id}/morepoints`)
                API.PostAPI(APIPOSTS, postData).then(this.props.redirectToUserPage())
            })
        }
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
                            <Dropdown 
                                clearable 
                                options={conditionOptions} 
                                selection
                                onChange={ (e, value) => this.handleConditionChange(e, value)}
                            />
                        </label>

                        <label>
                            <Dropdown 
                                clearable 
                                options={categoryOptions} 
                                selection
                                onChange={ (e, value) => this.handleConditionChange(e, value)}
                            />
                        </label>

                        <input className="ag" type="submit" value="Post Your ad !"/>

                    </form> 
                </div>
            </div>
        );
    }
}

export default PostCreation;
