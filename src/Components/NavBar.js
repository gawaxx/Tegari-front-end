import React, { Component } from 'react';
import './Component.css';
import SearchBar from './SearchBar';
import AccountCard from './AccountCard/accountCard';
import { Link } from 'react-router-dom'



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
                        this.props.user ? <AccountCard user={this.props.user} /> : 
                        <div> 
                            You are not logged in
                            <Link to="/login"> Click here to login</Link>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default NavBar;
