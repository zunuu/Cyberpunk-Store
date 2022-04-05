import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './User.css'
const User = (props) => {
    const { name, review, rating, image } = props.user;
    return (
        <div className=' m-0   col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-5 mb-3 pt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='card-image' src={image} />
                <Card.Body className='bg-info bg-opacity-10'>
                    <Card.Title className='fs-3'>{name}</Card.Title>
                    <hr />
                    <Card.Text >
                        {review}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush ">
                    <ListGroupItem className=' bg-light'>Rating:{rating}</ListGroupItem>
                </ListGroup>

            </Card>
        </div>
    );
};

export default User;