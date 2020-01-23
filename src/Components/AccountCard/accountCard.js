import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image, Dropdown } from 'semantic-ui-react'


export class accountCard extends Component {

    handleClick = () => {
        console.log("Here")
    }

    render() {
        return (
            <Dropdown text="My profile" style={{ color: 'white'}} >
                <Dropdown.Menu>
                    <Dropdown.Item >
                        <Card.Header> Hi {this.props.user.user_name}</Card.Header>
                    </Dropdown.Item >
                    <Dropdown.Item >
                        <Card.Meta>{this.props.user.points} points</Card.Meta>
                    </Dropdown.Item >
                    <Dropdown.Item >
                        <Link to="/my_profile" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                            <Button positive>
                                My Profile
                         </Button>
                        </Link>
                    </Dropdown.Item >
                    <Dropdown.Item >
                    <Button negative onClick={this.props.logout}>
                             Logout
                     </Button>
                    </Dropdown.Item >
                    
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default accountCard;
