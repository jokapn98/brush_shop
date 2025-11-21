import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/search/searchSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavbarMenu() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  /*  const handleSearchChange = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/shop/page/1?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  }; */
  const handleSearchChange = (e) => {
    e.preventDefault();
    dispatch(setSearch(searchTerm)); //cuvam search u redaksu
    navigate("/shop/page/1");
    setSearchTerm("");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand className="h4 volkhov-regular" href="/">
          BRUSHES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="w-100">
            <Col xs={12} lg={8}>
              <Nav className="ms-lg-4 me-auto nav-links">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/shop/page/1">Shop</Nav.Link>
                <Nav.Link href="/">New Arrivals</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} lg={4} className="mt-2 mt-lg-0">
              <Form className="d-flex" onSubmit={handleSearchChange}>
                <Form.Control
                  type="search"
                  placeholder="Pretraži proizvod"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="me-2 nav-input"
                />
                <Button
                  variant="outline-dark"
                  className="nav-button"
                  type="submit"
                >
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
