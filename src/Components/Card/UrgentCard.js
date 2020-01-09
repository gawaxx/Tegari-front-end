import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'



export class UrgentCard extends Component {
    render() {
        const {category, user_id, id, title, price, postcode, city, description, image_url, condition, created_at} = this.props.post
        return (
            <Card>
                <Image src={image_url} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        );
    }
}

export default UrgentCard;
