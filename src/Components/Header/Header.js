import React from 'react';
import { Nav } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='container p-0'>
            <Nav className="justify-content-center text-secondary  mt-3" activeKey="/home">
                <Nav.Item>
                    <Link className='navItems ' to="/home">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='navItems ' to="/reviews">Reviews</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='navItems ' to="/dashboards">Dashboards</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='navItems ' to="/blogs">Blogs</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='navItems ' to="/about">About</Link>
                </Nav.Item>



            </Nav>
        </div >
    );
};

export default Header;