import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useUsers from '../../hooks/useUsers';
import User from '../User/User';

const Reviews = () => {
    const [users, setUsers] = useUsers()
    console.log(users);
    return (
        <div className='container mx-auto pt-5 d-flex row justify-content-center mt-5'>

            {
                users.map(user => <User key={user.id} user={user} ></User>)
            }
        </div>
    );
};

export default Reviews;