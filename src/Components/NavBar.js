import React, { Component } from 'react';
import './NavBar.css';
import SearchBar from './SearchBar';
// import { APILINK, API } from './API.js'


export class NavBar extends Component {

    handleSubmit = event => {
        event.preventDefault()
        console.log(event.target.search.value)
        event.target.search.value = ""
        // console.log(API.GetAPI(`${APILINK}/users`))
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
