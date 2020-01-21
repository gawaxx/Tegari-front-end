import React, { Component } from 'react';
import { APIUSERS, API } from '../API';

export class EditMyAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {},
            user: this.props.user,
            percent: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ value: this.props.user })
    }

    handleChange(event) {
        this.setState({ value: {...this.state.value, [event.target.name]: event.target.value} });
    }

    handleSubmit = e => {
        if (e.target.password.value === e.target.password_confirmation.value) {
            e.preventDefault();
            let patchData = {
                user: this.state.value
            }
            API.PatchAPI(APIUSERS, patchData)
        }
        else {
            e.preventDefault()
            console.log("Passwords don't match")
        }
    }
  
    render() {
        const { email, password, password_confirmation, name, surname, user_name } = this.state.value
        return (
            <div className="FormContainer" >
                <form onSubmit={(e) => this.handleSubmit(e) }>
                    <h2>Edit your info</h2>
                    <label>
                        <input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => this.handleChange(e)} />
                        <span> E-mail</span>
                    </label>

                    <label>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => this.handleChange(e)} />
                        <span> Password </span>
                    </label>

                    <label>
                        <input type="password" name="password_confirmation" placeholder="Password confirmation" value={password_confirmation}onChange={(e) => this.handleChange(e)} />
                        <span> Password confirmation</span>
                    </label>

                    <label>
                        <input type="nameofuser" name="name" placeholder="Your Name" value={name} onChange={(e) => this.handleChange(e)} />
                        <span> Your name</span>
                    </label>

                    <label>
                        <input type="familyName" name="surname" placeholder="Your last name" value={surname} onChange={(e) => this.handleChange(e)} />
                        <span> Your last name</span>
                    </label>

                    <label>
                        <input type="username" name="user_name" placeholder="Username" value={user_name} onChange={(e) => this.handleChange(e)} />
                        <span> Username </span>
                    </label>

                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default EditMyAccount;
