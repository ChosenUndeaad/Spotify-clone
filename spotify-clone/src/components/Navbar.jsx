import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import appleLogo from "../assets/logos/apple.svg";
import appleMusic from "../assets/logos/music.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyNavbar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavDropdown
          title={<i className='bi bi-list'></i>}
          id='basic-nav-dropdown'
          className='text-danger'
        >
          <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
        </NavDropdown>

        <Navbar.Brand href='#home' className='mx-2'>
          <img
            src={appleMusic}
            width='100'
            height='30'
            className='d-inline-block align-top'
            alt='Apple Music Logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home' className='text-danger'>
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
