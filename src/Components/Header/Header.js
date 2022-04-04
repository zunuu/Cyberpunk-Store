import React from 'react';
import { Nav } from 'react-bootstrap';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <Nav className="justify-content-center text-secondary  m-3" activeKey="/home">
                <Nav.Item>
                    <Nav.Link className='navItems' href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navItems' href="/Reviews">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navItems' href="/About">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navItems' href="/Blogs">Blogs</Nav.Link>
                </Nav.Item>


            </Nav>
        </div>
    );
};

export default Header;