import React, { Component } from 'react';
import './NavBar.css';
import SearchBar from './SearchBar';


export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="company-Logo">
                    <h1>Company Logo</h1>
                </div>
                <div className="search-bar">
                    <SearchBar />
                </div>
                <div className="account-info">
                    <p> user info stuff</p>
                </div>
            </div>
        );
    }
}

export default NavBar;
