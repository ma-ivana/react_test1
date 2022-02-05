import { CartWidget } from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from "react-bootstrap";
import things from '../images/things.png';
import '../App.css';


export const NavBar = () => {
  return (
      <Navbar  variant="dark" expand="md" className="navbar" > 
        <Container className="navbar" >
        <Navbar.Brand> 
         <div className="logo navbar " >  
           <img src={things} alt="logo" className="navbar" ></img>
         </div>
        </Navbar.Brand>
        <Nav className="me navbar">
          <Nav.Link href="" className="navbar" > Home </Nav.Link>
          <Nav.Link href="" className="navbar" > Bootcamp </Nav.Link>
          <NavDropdown title ="Languages" className="navbar" id="navbarScrollingDropdown"> 
            <NavDropdown.Item href="">React.js</NavDropdown.Item>
            <NavDropdown.Item href="">JavaScript</NavDropdown.Item>
            <NavDropdown.Item href="">Next.js</NavDropdown.Item>
            <NavDropdown.Item href="">HTML5</NavDropdown.Item>
            <NavDropdown.Item href="">CSS3</NavDropdown.Item>
          </NavDropdown>

        </Nav>
        </Container>
      </Navbar>
     
   
  );
};
