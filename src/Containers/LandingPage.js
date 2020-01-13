import React, { Component } from 'react';
import '../Containers/CardsContainer.css'
import CreatePost from '../Components/CreatePost';
import { Link } from 'react-router-dom'

export class LandingPage extends Component {

    handleClick = () => {
        console.log("here")
    } 

    render() {
        return (
            <div className="LandingPageBigWrapper">
                <div className="FrontPageLeftSide">
                    1
                </div>

                <div className="Welcome" >
                    <h1>WELCOME TO *INSERT APP NAME* </h1>
                    <h2> You can buy or sale anything you want! It's easy and since this is a demo you don't even need an account!</h2>
                    <h2> This website is made to avoid scams, based on a point system for users as well as an active moderation </h2>
                </div>

                <div className="FrontPageRightSide">
                    <div onClick={() => this.handleClick()} >
                        <CreatePost />
                    </div>
                    <h1> Or </h1>
                    <div className="AccountCard">
                        <div className="AccountCardcontainer">
                            <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}} >
                                <h4><b> Create an account </b></h4>
                                <p> it's free :) </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
