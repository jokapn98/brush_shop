import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarMenu() {
  return (
    <div className="navbar">
      <div className=" container ">
        <Navbar expand="lg" className="bg-body-tertiary ">
          <Container>
            <Navbar.Brand className="h4 volkhov-regular col-3" href="/">
              BRUSHES
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="col-9    " id="basic-navbar-nav ">
              <Nav className="me-auto col-12 navbar-collapse-nav">
                <div className="col-3"> </div>
                <Nav.Link className="button-w" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="button-w" href="/ProductDetails">
                  Details
                </Nav.Link>
                <Nav.Link className="button-w" href="/">
                  New Arrivals
                </Nav.Link>
                <Nav.Link className="button-w" href="/">
                  Contact
                </Nav.Link>
                <Nav.Link className="button-w" href="/Shop">
                  Shop
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarMenu;
