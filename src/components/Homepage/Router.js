import React from 'react';
import './Router.css';

import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';



function DashBoard() {
    return (
        <>
            <div className='box'>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand >Movie Ticket Booking</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#movies">Movies</Nav.Link>
                            <Nav.Link href="#theatres">Theatres</Nav.Link>
                            <Nav.Link href="#offers">Offers</Nav.Link>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                            <Nav.Link href="#contact us">Contact Us</Nav.Link>
                            <Nav.Link href="#adminlogin">Admin Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                              
            </div>
        </>
    )
}

export default DashBoard;