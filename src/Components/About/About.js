import React from 'react';
import { Button, Form } from 'react-bootstrap';

const About = () => {
    return (
        <div className='mt-5 container-fluid'>
            <p className='bg-light p-5 rounded-bottom rounded-pill  mb-0'>Our mission is to fulfill the customers satisfaction in terms of cafeinated products</p>
            <div className='p-5  bg-danger bg-opacity-10'>
                <h2>Contact Us</h2>
                <p>email: cafe_buzzer@protonmail.pm</p>
                <p>Adress: Planet Earth,Milky Way</p>
            </div>
            <div className='bg-opacity-10 bg-secondary'>
                <Form className='container  p-5 w-25'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" className='bg-info bg-opacity-10' placeholder="Enter Your Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" className='bg-info bg-opacity-10' placeholder="What's your concern?" rows={3} />
                    </Form.Group>
                    <Button variant="outline-secondary" className='w-100' >Submit</Button>{' '}
                </Form>
            </div>


        </div>
    );
};

export default About;