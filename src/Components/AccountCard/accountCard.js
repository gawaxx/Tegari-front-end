import React, { Component } from 'react';
import '../Component.css';
import { Link } from 'react-router-dom';

export class accountCard extends Component {

    handleClick = () => {
        console.log("Here")
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/my_profile" style={{ color: 'inherit', textDecoration: 'inherit'}} >
                        <div className="AccountCard">
                            <div className="AccountCardcontainer" onClick={() => this.handleClick()}>
                                {/* <NavLink className='bottom-nav-link' to="/" exact> */}
                                    <h4><b> Welcome {this.props.user.user_name} </b></h4>
                                    <p> {this.props.user.points} points </p>
                                {/* </Navlink> */}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default accountCard;
