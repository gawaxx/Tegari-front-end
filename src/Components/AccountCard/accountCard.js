import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'


export class accountCard extends Component {

    handleClick = () => {
        console.log("Here")
    }

    render() {
        return (
            // <div>
            //     <div>
            //         <Link to="/my_profile" style={{ color: 'inherit', textDecoration: 'inherit'}} >
            //             <div className="AccountCard">
            //                 <div className="AccountCardcontainer" onClick={() => this.handleClick()}>
            //                     {/* <NavLink className='bottom-nav-link' to="/" exact> */}
            //                         <h4><b> Welcome {this.props.user.user_name} </b></h4>
            //                         <p> {this.props.user.points} points </p>
            //                     {/* </Navlink> */}
            //                 </div>
            //             </div>
            //         </Link>
            //     </div>
            // </div>

            <Card>
                <Card.Content>
                    <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>{this.props.user.user_name}</Card.Header>
                    <Card.Meta>{this.props.user.points}</Card.Meta>
                    <Card.Description>
                    This here is your profile card
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Link to="/my_profile" style={{ color: 'inherit', textDecoration: 'inherit'}} >
                        <Button basic color='green'>
                            My Profile
                        </Button>
                    </Link>
                    <Button basic color='red' onClick={this.props.logout}>
                        Logout
                    </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}

export default accountCard;
