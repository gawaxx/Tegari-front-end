import React, { Component } from 'react';
import '../Component.css'

export class accountCard extends Component {

    handleClick = () => {
        console.log("Here")
    }

    render() {
        return (
            <div>
                <div>
                    <div className="AccountCard">
                        <div className="AccountCardcontainer" onClick={() => this.handleClick()}>
                            {/* <NavLink className='bottom-nav-link' to="/" exact> */}
                                <h4><b> Welcome {this.props.user.user_name} </b></h4>
                                <p> {this.props.user.points} points </p>
                            {/* </Navlink> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default accountCard;