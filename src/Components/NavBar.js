import React, { Component } from 'react';
import './Component.css';
import SearchBar from './SearchBar';


export class NavBar extends Component {

    handleSubmit = event => {
        event.preventDefault()
        console.log(event.target.search.value)
        event.target.search.value = ""
        // const postInfo = {
        //     user_name: "Blob",
        //     password_digest: "1234",
        //     points: 0,
        //     name: "Bob",
        //     surname: "bob",
        //     n_of_reports: 0,
        //     email: "email@email.com"
        // }
        // API.PostAPI(`${APILINK}/users`, postInfo).then(console.log)
    }

    render() {
        return (
            <div className="NavBar">
                <div className="company-Logo">
                    <h1>Company Logo</h1>
                </div>
                <div className="search-bar">
                    <SearchBar handleSubmit={this.handleSubmit} />
                </div>
                <div className="account-info">
                    <p> user info stuff</p>
                </div>
            </div>
        );
    }
}

export default NavBar;
