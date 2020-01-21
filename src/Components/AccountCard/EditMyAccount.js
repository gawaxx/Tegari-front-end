import React, { Component } from 'react';

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

    increment = () => {
        this.setState((prevState) => ({
            percent: prevState.percent >= 100 ? 0 : prevState.percent + 17,
        }))
    }

    handleChange(event) {
        this.setState({ value: {...this.state.value, [event.target.name]: event.target.value} });
    }

    handleSubmit = e => {
        if (e.target.password.value === e.target.password_confirmation.value) {
            e.preventDefault();
            let signUpData = {
                user: this.state.value
            }
            //POST REQUEST GOES HERE 
        }
        else {
            e.preventDefault()
            console.log("Passwords don't match")
        }
    }
  
    render() {
        return (
            <div className="FormContainer" >
                <form onSubmit={() => this.handleSubmit() }>
                    <h2>sign up</h2>
                    <label>
                        <input type="email" name="email" placeholder="E-mail" onChange={() => this.increment()} />
                        <span> E-mail</span>
                    </label>

                    <label>
                        <input type="password" name="password" placeholder="Password" onChange={() => this.increment()} />
                        <span> Password </span>
                    </label>

                    <label>
                        <input type="password" name="password_confirmation" placeholder="Password confirmation" onChange={() => this.increment()} />
                        <span> Password confirmation</span>
                    </label>

                    <label>
                        <input type="nameofuser" name="nameofuser" placeholder="Your Name" onChange={() => this.increment()} />
                        <span> Your name</span>
                    </label>

                    <label>
                        <input type="familyName" name="familyName" placeholder="Your last name" onChange={() => this.increment()} />
                        <span> Your last name</span>
                    </label>

                    <label>
                        <input type="username" name="username" placeholder="Username" onChange={() => this.increment()} />
                        <span> Username </span>
                    </label>

                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default EditMyAccount;
