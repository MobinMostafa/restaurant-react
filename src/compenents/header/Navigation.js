import { useState } from 'react';
import {Navbar, NavbarBrand,Nav,NavItem, Collapse, NavbarToggler,} from 'reactstrap'
import {NavLink} from 'react-router'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
   <div className="container-fluid bg-dark fixed-top" style={{zIndex: 10 }}> 
       <div className="container">
       <Navbar color="dark" dark expand="md">
      
      <NavbarBrand href="/">Restaurent </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
      <Nav className='ms-auto' navbar>
        <NavItem>
          <NavLink to="/" className='nav-link'>Home</NavLink>
        </NavItem>
        <NavItem>
         <NavLink to="/about" className='nav-link'>About</NavLink> 
        </NavItem>
       
      </Nav>
      </Collapse>
      </Navbar>
       </div>
   </div>

  )
}

export default Navigation