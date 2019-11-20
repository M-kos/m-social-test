import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar bg="primary" expand="lg">
            <Navbar.Brand href="#home">M-Social-Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link onClick={props.showPopUp} href="#">Pop-up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;