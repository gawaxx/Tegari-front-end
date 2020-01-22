import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'


export class accountCard extends Component {

    handleClick = () => {
        console.log("Here")
    }

    render() {
        return (
            <Card>
                <Card.Content>
                    <Image
                    floated='right'
                    size='mini'
                    src='https://i7.pngguru.com/preview/243/8/56/computer-icons-user-profile-clip-art-person-icon-user-person-man-icon.jpg'
                    />
                    <Card.Header>{this.props.user.user_name}</Card.Header>
                    <Card.Meta>{this.props.user.points} points</Card.Meta>
                    {/* <Card.Description>
                    This here is your profile card
                    </Card.Description> */}
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Link to="/my_profile" style={{ color: 'inherit', textDecoration: 'inherit'}} >
                        <Button positive>
                            My Profile
                        </Button>
                    </Link>
                    <Button negative onClick={this.props.logout}>
                        Logout
                    </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}

export default accountCard;
