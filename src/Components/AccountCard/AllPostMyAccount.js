import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react' //Icon

export class AllPostMyAccount extends Component {
    render() {
        const { image_url, title, description, category, condition, price } = this.props.post 
        return (
            <div>
                <Card>
                    <Image src={image_url} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{category}, condition: {condition} </Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='pound' />
                        {price}
                    </a>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default AllPostMyAccount;
