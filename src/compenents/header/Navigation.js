import {Navbar, NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap'
import {Link} from 'react-router'

const Navigation = () => {
  return (
    <Navbar color="dark" dark>
       <div className="container">
          <NavbarBrand to="/">Restaurent</NavbarBrand>
          <Nav>
            <NavItem>
             <NavLink> <Link to="/">Home</Link> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to="/about">About</Link> </NavLink>
            </NavItem>

          </Nav>
       </div>
    </Navbar>
  )
}

export default Navigation