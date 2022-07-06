import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css'
const expand = 'lg'
//TODO: borrar ids ?

const NavBar = () =>
    <Navbar key={expand} expand={expand} className="navbar mb-3">
        <Container fluid>
            <Navbar.Brand href="#">
                {/*  TODO: AGREGAR ICON */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Dashboard</Nav.Link>
                        <Nav.Link href="#action2">Influencer List</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>

export default NavBar;