import React, { Component } from 'react';
import './NavBar.css';

export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="company-Logo">
                    <h1>Company Logo</h1>
                </div>
                <div className="search-bar">
                    <p> search bar </p>
                </div>
                <div className="account-info">
                    <p> user info stuff</p>
                </div>
            </div>
        );
    }
}

export default NavBar;
