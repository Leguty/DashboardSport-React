import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet} from 'react-router-dom';

export const NavbarComp = () => {

return (
  
 <>  
  <Navbar className='navBg' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to={'/'} >DashBoardSport</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/sheventos'}>Mostrar Eventos</Nav.Link>
            <Nav.Link as={Link} to={'/regevento'}>Registrar Evento</Nav.Link>
            <Nav.Link as={Link} to={'/editevento/:_id'}>Editar Evento</Nav.Link>
            
          </Nav>
          <Nav>
            <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/create"}>Registrar</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/users"}>Mostrar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/login"}>Login</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
          <Outlet>

          </Outlet>
  </section>
  </>  

)}
export default NavbarComp 