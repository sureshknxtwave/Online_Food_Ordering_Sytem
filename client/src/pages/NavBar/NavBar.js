import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../components/foodTruckLoogo.png';
import './NavBar.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeBackground);

      return () => {
        window.removeEventListener('scroll', changeBackground);
      };
    }
  }, []);

  return (
    <Navbar expand="lg" className={`${navbar ? 'active fixed-top shadow-lg slide-in-blurred-top' : 'Navbar fixed-top'}`}>
      <Container>
        <Navbar.Brand href="#"><img className="NavLogo fade-in" src={Logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto m-auto my-2 my-lg-0 NavBarLinks"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`} href="#action1"><i class="fa-solid fa-house"></i>Home</Nav.Link>
            <Nav.Link className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`} href="#action2"><i class="fa-solid fa-blog"></i>Blog</Nav.Link>
            <NavDropdown title={<span className={`fade-in ${navbar ? ' dropdown-active ' : 'dropdown navLink'}`} ><i class="fa-solid fa-address-card"></i>Registration</span>} id="navbarScrollingDropdown">
            <Link className="nav-link"  to="/login" >
              <NavDropdown.Item className="navLinkHover fade-in " href="#action3"><i class="fa-solid fa-right-to-bracket"></i>Login</NavDropdown.Item>
            </Link>  
              <Link className="nav-link"  to="/register" >
                <NavDropdown.Item  className="navLinkHover fade-in "  href="#action4">
                <i class="fa-solid fa-right-to-bracket"></i>Signup
                </NavDropdown.Item>
              </Link>
              <Link className="nav-link"  to="/admin" >
              <NavDropdown.Item className="navLinkHover fade-in " href="#action4">
              <i class="fa-solid fa-lock"></i>Admin Login
              </NavDropdown.Item>
              </Link>
            </NavDropdown>
           
            <NavDropdown title={<span className={`fade-in ${navbar ? 'dropdown-active ' : 'dropdown navLink'}`} ><i class="fa-solid fa-city"></i>Select Your City</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item className="navLinkHover fade-in " href="#action3">KL University</NavDropdown.Item>
              <NavDropdown.Item className="navLinkHover fade-in " href="#action4">
                Guntur
              </NavDropdown.Item>
              <NavDropdown.Item className="navLinkHover fade-in " href="#action4">
                Vijayawada
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex fade-in">
            <Form.Control
              type="search"
              placeholder="Search Restaurants"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
