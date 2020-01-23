import React, { Component } from 'react';
import { APIPOSTS, API, APILINK } from '../API.js'
import { Link } from 'react-router-dom' // Link, Switch
import { Button, Icon, Modal, Header, Placeholder, Dropdown, Grid, Card, Pagination } from 'semantic-ui-react'



const options = [
    { key: 1, text: 'Potential Scam', value: 'Potential Scam' },
    { key: 2, text: 'Threatening user', value: 'Threatening user' },
    { key: 3, text: 'Prohibited for sale', value: 'Prohibited for sale' },
]


export class PostCard extends Component {

    state = {
        post: [],
        user: [],
        modalOpen: false,
        value: {}
    }

    handleChange = (e, { value }) => this.setState({ value })

    handleReport = (e) => {
        e.preventDefault()
        const PostContent = {
            post_id_reported: this.state.post.id,
            user_reported_id: this.state.user.id,
            user_reporting_id: (this.props.user === null ? 173 : this.props.user.id ),
            reason_reporting: this.state.value 
        }
        API.PostAPI(`${APILINK}/reports/docreate`, PostContent)
    }

    handleSavePostClick = (e) => {
        e.preventDefault()
        const PostContent = {
            user_id: this.props.user.id,
            post_id: this.state.post.id
        }
        API.PostAPI(`${APILINK}/saveposts`, PostContent)
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => {
        this.setState({ modalOpen: false }) 
        this.dbhandleClick()
    }

    handleReportClose = (e) => {
        this.setState({ modalOpen: false }) 
        this.handleReport(e)
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
        const { value } = this.state.value 
        return (
            <div className="wrapper">

                <div className="tips">
                    <h3>If it looks too good to be true, it probably is</h3>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />
                </div>

                <div className="PostInfo">
                    <Button icon labelPosition='left' onClick={() => { this.handleClick() }} >
                        Go Back
                        <Icon name='left arrow' />
                    </Button>
                    <br></br>
                    {
                        (image_url !== null ) ?
                            <img src={image_url} alt="post" style={{width: '300px', height: '300px'}} ></img>
                            :
                            <Placeholder style={{ height: 300, width: 300 }}>
                                <Placeholder.Image />
                            </Placeholder>
                    }
                    <h1>{title}, £{price}</h1>
                    <h2 style={{color: 'black'}} >{postcode}, {city}</h2>
                    
                    <div className="para" >
                        <p>Category: {category}</p>
                    </div>

                    <div className="para" >
                        <p>condition: {condition}</p>
                    </div>

                    <div className="description" >
                        <h3> {description} </h3>
                    </div>
                    {
                        (this.props.user === null) ?
                            <Modal
                                trigger={<Button color='red' onClick={this.handleOpen}> Report  Post </Button>}
                                open={this.state.modalOpen}
                                onClose={this.handleReportClose}
                                basic
                                size='small'
                            >
                                <Header icon='eye' content='Report this post' />
                                <Modal.Content>
                                    <Grid columns={2}>
                                        <Grid.Column>
                                            <Dropdown
                                                onChange={this.handleChange}
                                                options={options}
                                                placeholder='Choose an option'
                                                selection
                                                value={value}
                                            />
                                        </Grid.Column>
                                    </Grid>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='green' onClick={e => this.handleReportClose(e)} inverted>
                                        <Icon name='checkmark' /> Report Post
                                    </Button>
                                </Modal.Actions>
                            </Modal>

                            :

                            (this.props.user.id === this.state.post.user_id) ?
                                <div>

                                    <Link to={`${this.state.post.id}/edit`} > <button className="ui violet button">Edit your post</button> </Link>

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
                                </div>

                                :


                                <Button color='purple' onClick={(e) => this.handleSavePostClick(e)} >
                                    Save Post
                                </Button>
                    }

                </div>

                <div className="sellerInfo">

                    <Card>
                        <Card.Content header>
                            <Link to={`/users/${id}`} style={{ color: 'inherit', textDecoration: 'inherit' }} >
                                <Header as='h1'>
                                    <Icon name="user circle" /> {user_name}
                                </Header>
                            </Link>
                        </Card.Content>
                        <Card.Content description={description} >
                            <h3 style={{color: 'black'}} >Posted by: {name} </h3>
                            <h3 style={{color: 'black'}} > {points} points </h3>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name="pencil square" /> <p> posted on {created_at} </p>
                        </Card.Content>
                    </Card>

                </div>

            </div>
        );
    }
}

export default PostCard;
