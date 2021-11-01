import React from 'react';
import {  Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Useauth from '../../Hooks/Useauth';
import Search from '../Search/Search';
import './Header.css';

const Header = () => {
    const {user, logout} = Useauth();
    return (

        <>
            <Navbar className="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h1>Holiday Travels</h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                           
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                            {
                                user?.email ?
                                   <div className="div">
                                        <Button varient="light" onClick={logout} className="btnn">Logout</Button>
                                       
                                     <Nav variant="pills" activeKey="1" className="dropdown">
                                     <NavDropdown  title={<a href="#login">{user?.displayName}</a>} id="nav-dropdown">
                                     <NavDropdown.Item className="drop" as={Link} to="addservice">Add Service</NavDropdown.Item>
                                         <NavDropdown.Item className="drop" as={Link} to="manage">Manage</NavDropdown.Item>
                                         <NavDropdown.Item onClick={logout} className="drop">Logout</NavDropdown.Item>
                                         </NavDropdown>
                                       </Nav>
   
                                   </div>:
                                
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            
                           
                

                            
                            
                       </Navbar.Collapse>
                   </Container>
            </Navbar>
 

        </>
        


    );

};

export default Header;