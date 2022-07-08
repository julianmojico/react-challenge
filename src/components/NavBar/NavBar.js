import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPersonCircle } from "react-icons/bs";
import { ReactComponent as Logo } from "../../resources/img/logo-app.svg";

const NavBar = () => (
  <Navbar expand={"lg"} className="navbar mb-3">
    <Container fluid>
      <Navbar.Brand href="#">
        <Logo className="logo"></Logo>
      </Navbar.Brand>
      <Navbar.Toggle bsPrefix="burgerMenu" />
      <Navbar.Offcanvas placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Logo className="logo"></Logo>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 py-1">
            <Nav.Link className="px-4 mx-sm-4 mx-md-3" href="#action1">
              Dashboard
            </Nav.Link>
            <Nav.Link className="influencerLink mx-sm-4 px-4" href="#action2">
              Influencer List
            </Nav.Link>
            <Nav.Link
              className="personCircle d-none d-lg-block p-0 mx-4"
              href="#action3"
            >
              <BsPersonCircle size={"1.3em"} color={"#475569"} />
            </Nav.Link>
            <Nav.Link
              className="d-lg-none d-lg-none mx-sm-4 px-4"
              href="#action2"
            >
              My Account
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
);

export default NavBar;
