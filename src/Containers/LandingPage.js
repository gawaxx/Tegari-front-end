import React, { Component } from 'react';
import CreatePost from '../Components/CreatePost';
import { Link } from 'react-router-dom'

export class LandingPage extends Component {

    handleClick = () => {
        console.log("here")
    } 

    render() {
        return (
            <div className="BigWrapper LandingPage">
                <div className="FrontPageLeftSide">
                </div>

                <div className="Welcome" >

                    <div>
                        <h1> WELCOME TO Tegari </h1>
                    </div>

                    <div>
                        <h2> You can buy or sale anything you want! It's easy and since this is a demo you don't even need an account!</h2>
                    </div>

                    <div>
                        <h2> This website is made to avoid scams, based on a point system for users as well as an active moderation </h2>
                    </div>

                    <div>
                        <h2> To get started you can search up there or look at what's on the right </h2>
                    </div>

                </div>

                <div className="FrontPageRightSide">
                    <div >
                        <Link to="/create" style={{ color: 'inherit', textDecoration: 'inherit'}} > <CreatePost /> </Link>
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
