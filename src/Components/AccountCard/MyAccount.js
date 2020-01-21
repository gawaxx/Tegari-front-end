import React, { Component } from 'react';
import { Button, Popup, Header, Icon, Modal } from 'semantic-ui-react'
import "./MyAccount.css";
import { API, APILINK, APIUSERS } from '../API';
import { Link } from 'react-router-dom' // Link, Switch
import AllPostMyAccount from './AllPostMyAccount';



// import { Redirect } from 'react-router-dom'
// import { API, APILINK } from '../API';

const style = {
    borderRadius: 0,
    opacity: 1,
    padding: '2em',
  }

export class MyAccount extends Component {

    state = {
        current_user: this.props.user,
        allPosts: [],
        savePost: [],
        modalOpen: false
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleDeleteClose = () => {
        this.setState({ modalOpen: false })
        const deleteInfo = {
            userid: this.props.user.id
        }
        API.DeleteAPI(APIUSERS, deleteInfo)
    }

    componentDidMount() {
        this.getUserPost()
    }

    getUserPost = () => {
        API.GetAPI(`${APILINK}/users/${this.state.current_user.id}`)
            .then(data => this.setState({ allPosts: data.posts, savePost: data.save_posts }) )
    }

    render() {
        const {user} = this.props
        return (
            <div>
                <div>
                    <h2> Hello {user.user_name}</h2>
                    <div className="allign" >
                        <h2> You have {user.points} points </h2>
                        <Popup trigger={<Button icon='question' />} content='Points are a way to trust other users, earn points by being active!' style={style} inverted />
                    </div>

                    <h2> Your posts </h2>

                    <div className="cardscontainer">
                        {
                            this.state.allPosts.map(post => <Link to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}> <AllPostMyAccount post={post} key={post.id} /> </Link>)
                        }
                    </div>

                    <h2> Post you saved </h2>

                    <div className="cardscontainer">
                        {
                            this.state.savePost.map(post => <Link to={`/posts/${post.post_id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}> <AllPostMyAccount post={() => API.GetAPI(`${APILINK}/posts/${post.post_id}`).then(post => post)} key={post.id} /> </Link>)
                        }
                    </div>

                </div>

                <div>
                    <Link to='my_profile/edit' > <Button color='purple'>Edit your Account</Button> </Link>
                </div>

                <div>
                    <Modal
                        trigger={<Button color="red" onClick={this.handleOpen}>Delete your account</Button>}
                        open={this.state.modalOpen}
                        onClose={this.handleClose}
                        basic
                        size='small'
                    >
                        <Header icon='trash alternate' content='Delete your account' />
                        <Modal.Content>
                            <h3>Do you really want to delete your account ?</h3>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='green' onClick={this.handleClose} inverted>
                                <Icon name='cancel' /> No Go back
                            </Button>
                            <Button color='red' onClick={this.handleDeleteClose} inverted>
                                <Icon name='checkmark' /> Yes I wish to Delete my account
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>

            </div>
        );
    }
}

export default MyAccount;
