import React, { Component } from 'react';
import './Component.css';
import SearchBar from './SearchBar';
import AccountCard from './AccountCard/accountCard';
import { Link } from 'react-router-dom'



export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="company-Logo">
                    <Link to="/"><h1>Company Logo</h1></Link>
                </div>
                <div className="search-bar">
                    <SearchBar handleSearchSubmit={this.props.handleSearchSubmit} />
                </div>
                <div className="account-info">
                    { 
                    this.props.user ? 
                        <AccountCard user={this.props.user} /> 
                    : 
                        <div className="NotAccountCard"> 
                            <div className="NotAccountCardContainer">
                                You are not logged in
                                <Link to="/login"> Click here to login</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default NavBar;
