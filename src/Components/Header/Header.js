import React from 'react';
import { Nav } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Nav className="justify-content-center text-secondary  m-3" activeKey="/home">
                <Nav.Item>
                    <Link className='navItems' to="/home">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='navItems' to="/reviews">Reviews</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='navItems' to="/dashboards">Dashboards</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='navItems' to="/blogs">Blogs</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='navItems' to="/about">About</Link>
                </Nav.Item>



            </Nav>
        </div >
    );
};

export default Header;