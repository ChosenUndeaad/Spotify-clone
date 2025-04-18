import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import appleMusic from "../assets/logos/music.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyNavbar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container className='d-flex justify-content-between'>
        <NavDropdown
          title={<i className='bi bi-list'></i>}
          id='basic-nav-dropdown'
          className='text-danger'
        >
          <NavDropdown.Item href='#action/3.1'>Music</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>
            Favorites action
          </NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3'>Playlists</NavDropdown.Item>
        </NavDropdown>

        <Navbar.Brand href='#home' className='mx-auto'>
          <img
            src={appleMusic}
            width='100'
            height='30'
            className='d-inline-block align-top'
            alt='Apple Music Logo'
          />
        </Navbar.Brand>

        <Nav className='ms-auto'>
          <Nav.Link href='#home' className='text-danger fw-bold'>
            {" "}
            Accedi
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
