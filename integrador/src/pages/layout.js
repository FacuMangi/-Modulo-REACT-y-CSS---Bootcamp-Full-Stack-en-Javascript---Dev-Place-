import { Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Layout = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Clothing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Tolls
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                History
              </NavDropdown.Item>
            </NavDropdown>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Ofers</Nav.Link>
              <Nav.Link href="#action2">Sell</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/help">Help</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="light" href="/register">Register</Button>
            </Form>
            <Navbar.Brand href="/" >
              <img
                src="favicon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

    </div>
  )
}