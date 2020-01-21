import React, { useState } from "react";
import { API } from "../API";

const EditMyAccount = props => {

    const [signupData] = useState({})
    const [percent, setPercent] = useState(0)

    const increment = () =>
        setPercent((prevState) => ({
            percent: prevState.percent >= 100 ? 0 : prevState.percent + 17,
    }))

    const getUserData = () => {
        API.GetAPI(`users/${props.user.id}`)
    }


    const handleSignupSubmit = e => {
        if (e.target.password.value === e.target.password_confirmation.value) {
            e.preventDefault();
            let signUpData = {
                email: signupData.email,
                password: e.target.password.value,
                name: e.target.nameofuser.value,
                familyName: e.target.familyName.value,
                username: e.target.username.value
            }
            // signup(signUpData)
        }
        else {
            e.preventDefault()
            console.log("Passwords don't match")
        }
    }



    return (
        <div className="FormContainer" >
            <form onSubmit={handleSignupSubmit}>
                <h2>sign up</h2>
                <label>
                    <input type="email" name="email" placeholder="E-mail" onChange={() => increment()} />
                    <span> E-mail</span>
                </label>

                <label>
                    <input type="password" name="password" placeholder="Password" onChange={() => increment()} />
                    <span> Password </span>
                </label>

                <label>
                    <input type="password" name="password_confirmation" placeholder="Password confirmation" onChange={() => increment()} />
                    <span> Password confirmation</span>
                </label>

                <label>
                    <input type="nameofuser" name="nameofuser" placeholder="Your Name" onChange={() => increment()} />
                    <span> Your name</span>
                </label>

                <label>
                    <input type="familyName" name="familyName" placeholder="Your last name" onChange={() => increment()} />
                    <span> Your last name</span>
                </label>

                <label>
                    <input type="username" name="username" placeholder="Username" onChange={() => increment()} />
                    <span> Username </span>
                </label>

                <input type="submit" />
            </form>
        </div>
    );

}

export default EditMyAccount;
