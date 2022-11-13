// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/CountryDetails/BRA">Brasil</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

  );
}

export default NavBar;