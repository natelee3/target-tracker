import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const Navigation = () => (
    
    <>
        <Navbar bg="transparent" collapseOnSelect expand="lg">
            <Container className="nav-container">
                <Navbar.Brand href="/">
                    Target Tracker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link eventKey="1">
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);

export default Navigation;