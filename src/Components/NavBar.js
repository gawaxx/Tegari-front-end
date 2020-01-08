import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Button, Form, Grid, Header, Message, Segment, Icon} from 'semantic-ui-react';


export class NavBar extends Component {
    render() {
        return (
            <Grid centered columns={5}>
                <Grid.Row fluid>
					<Segment>
						<NavLink className='bottom-nav-link' to="/allCards" exact>
							<Icon name='home' size='large' />
						</NavLink>

					</Segment>

					<Segment>
                        <NavLink
                        className='bottom-nav-link' to="/map" exact>
                            <Icon name='map marker alternate' size='large' />
                        </NavLink>
					</Segment>

					<Segment>
                        <NavLink className='bottom-nav-link' to="/" exact>
                            <Icon name='calendar plus outline' size='large' />
                        </NavLink>
					</Segment>

					<Segment>
                        <NavLink className='bottom-nav-link' to="/" exact>
                            <Icon name='star' size='large' />
                        </NavLink>
					</Segment>

					<Segment>
                        <NavLink className='bottom-nav-link' to="/" exact>
                            <Icon name='user circle' size='large' />
                        </NavLink>
					</Segment>
                    
			</Grid.Row>
		</Grid>
        );
    }
}

export default NavBar;
