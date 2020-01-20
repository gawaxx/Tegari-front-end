import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AccountCard from './AccountCard/accountCard';
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'




export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">

                <div className="company-Logo">
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }} ><h1> Tegari </h1></Link>
                </div>

                <div className="search-bar">
                    <SearchBar handleSearchSubmit={this.props.handleSearchSubmit} />
                </div>

                <div className="account-info">
                    { 
                    (this.props.user && this.props.user.user_name ) ? 
                        <AccountCard user={this.props.user} logout={this.props.logout} /> 
                    : 

                    <div>
                        < Link to="/login">
                            <Button animated basic color='purple'>
                                <Button.Content visible> Log in / Sign up</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                        </Link>
                    </div>
                    }
                </div>
                
            </div>
        );
    }
}

export default NavBar;
