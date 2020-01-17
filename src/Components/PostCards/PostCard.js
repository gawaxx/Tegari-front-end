import React, { Component } from 'react';
import { APIPOSTS, API } from '../API.js'
import { Link } from 'react-router-dom' // Link, Switch
import { Button, Icon, Modal, Header, Placeholder, Image } from 'semantic-ui-react'






export class PostCard extends Component {

    state = {
        post: [],
        user: [],
        modalOpen: false
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => {
        this.setState({ modalOpen: false }) 
        this.dbhandleClick()
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    dbhandleClick = () => {

        const deleteInfo = {
            userid: this.props.user.id 
        }

        API.DeleteAPI(`${APIPOSTS}/${this.state.post.id}/destroy`, deleteInfo)
        .then(window.history.pushState({urlPath:'/my_profile'}, "", '/my_profile'))
        .then(window.location.reload() )
    }

    handleClick = () => {
        window.history.back()
    }

    findPost = () => {
        API.GetAPI(`${APIPOSTS}/${window.location.href.split("/")[4]}`)
        .then(data =>  this.setState( {post: data[0], user: data[1]} ) )
    }

    componentDidMount() {
        this.findPost()
    }

    render() {
        const {category, title, price, postcode, city, description, image_url, condition, created_at} = this.state.post
        const { user_name, name, points, id } = this.state.user
        return (
            <div className="wrapper">

                <div className="tips">
                    <h3>If it looks too good to be true, it probably is</h3>
                </div>

                <div className="PostInfo">
                    <Button icon labelPosition='left' onClick={ () => {this.handleClick()} } >
                        Go Back
                        <Icon name='left arrow' />
                    </Button>
                    <br></br>
                    {
                        image_url ? 
                            <img src={image_url} alt="post" ></img>
                        : 
                            <Placeholder style={{ height: 300, width: 300 }}>
                                <Placeholder.Image />
                            </Placeholder>
                    }
                    <h1>{title}, £{price}</h1>
                    <h2>{postcode}, {city}</h2>
                    <p>{category}</p>
                    <p>condition: {condition}</p>
                    <p>{description}</p>
                    {
                        (this.props.user.id === this.state.post.user_id) ? 
                            <Modal
                                trigger={<Button color='red' onClick={this.handleOpen}>Delete your post</Button>}
                                open={this.state.modalOpen}
                                onClose={this.handleClose}
                                basic
                                size='small'
                            >
                                <Header icon='trash alternate' content='Delete your post' />
                                <Modal.Content>
                                    <h3>Are you sure you wish to delete your post ?</h3>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='red' onClick={this.handleClose} inverted>
                                        <Icon name='checkmark' /> Yes, Delete it
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                        :
                            ""
                    }
                </div>

                <div className="sellerInfo">
                    <Link to={`/users/${id}`} style={{ color: 'inherit', textDecoration: 'inherit' }} >
                        <Header as='h1'>
                            <Icon name="user circle"/> {user_name}
                        </Header>
                    </Link>
                    <h2>Posted by: {name} </h2>
                    <h2>Points: {points} </h2>
                    <p> posted at {created_at} </p>
                </div>
            
            </div>
        );
    }
}

export default PostCard;
