import React, { Component } from 'react';
import './Component.css';
import SearchBar from './SearchBar';
import AccountCard from './AccountCard/accountCard';
import AuthForms from '../Components/AuthForms.js'



export class NavBar extends Component {

    handleSubmit = event => {
        event.preventDefault()
        console.log(event.target.search.value)
        event.target.search.value = ""
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
                    {
                        this.props.user ? <AccountCard user={this.props.user} /> : <div> you are not logged in </div>
                    }
                </div>
            </div>
        );
    }
}

export default NavBar;
