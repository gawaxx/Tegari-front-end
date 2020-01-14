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


    render() {
        return (
            <div>
                <img src="https://via.placeholder.com/250" alt="placeholder" />
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
                            <select onChange={this.handleChange}>
                                <option value="New">New</option>
                                <option value="Almostnew">Almost new</option>
                                <option value="Used">Used</option>
                                <option value="Veryused">Very used</option>
                            </select>
                        </label>


                        <input type="submit" />
                    </form> 
                </div>
            </div>
        );
    }
}

export default PostCreation;
