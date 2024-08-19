

import React,{useState,useEffect} from 'react';

import { useNavigate } from 'react-router-dom';
 
import './UserNav.css' 
import Logo from '../../components/foodTruckLoogo.png';

import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ProfileOffcanvas from '../UserProfile/Profile' // Import Offcanvas


function UserNav({size,setShow}) {
  const [navbar, setNavbar] = useState(false);
  
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State for Offcanvas

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

  
   const navigate = useNavigate();

   const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login')
   }


   const handleProfileClick = () => {
    setShowOffcanvas(true);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };


  return (
    <>
    <Navbar expand="lg" className={`${navbar ? 'active fixed-top shadow-lg slide-in-blurred-top' : 'Navbar shadow-lg fixed-top'}`}>
      <Container >
      <Navbar.Brand href="#home" ><img className="NavLogo fade-in" src={Logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto m-auto my-2 my-lg-0 NavBarLinks"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link onClick={() => setShow(true)} className={`${navbar ? 'navLinkScroll fade-in ' : 'navLink fade-in'}`}><i class="fa-solid fa-house"></i>Home</Nav.Link>
             <Link onClick={handleProfileClick}  className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}><i class="fa-solid fa-user"></i>Profile</Link>
             
                <Link to="/user/orders" className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>Orders</Link>
                
                
             <Nav.Link  onClick={() => setShow(false)}  className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>Cart
              <span>
                <i className="fas fa-cart-plus"></i>
              </span>
             <span>
               {size}
              </span>
              </Nav.Link>
              <a href="#foodSection" className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}><i class="fa-solid fa-magnifying-glass"></i>Search</a>
              <Nav.Link onClick={handleSignOut} className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}><i class="fa-solid fa-right-from-bracket"></i>Log out</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <ProfileOffcanvas show={showOffcanvas} onHide={closeOffcanvas} />

</>

  );
}

export default UserNav;