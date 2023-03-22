import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './../Assets/Images/logo.png';
import './Navigation.css';
import './SearchBar.css';

function NavigationBar() {
  return (
    <>
      <Navbar expand="md" className="myNav mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="ml-auto d-inline-block logo"
            />
            Paradise Beauty
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md" style={{ fontStyle:"italic", fontSize:"25px" }}>
              Paradise Beauty
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <div className="search-bar-container mr-auto">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" placeholder="Search..." className="search-input mx-auto" />
            </div>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Destinations</Nav.Link>
                <Nav.Link href="#action1">About</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
