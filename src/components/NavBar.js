import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Button,} from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import {Link} from "react-router-dom";



export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link}to="/">G & G's Bait and Tackle</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link}to="/products/tool">Tools</NavDropdown.Item>
                            <NavDropdown.Item as={Link}to="/products/accessory">Accessory</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link}to="/mycart">My Cart</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link}to="/mycart"><Cart size='25px' className='me-4' /></Nav.Link>
                        <Button>Sign In!</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
}
