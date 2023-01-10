import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation() {
    const number = useSelector((state) => state.counterReducer)
    return (
        <Navbar bg="light" expand="lg " className='py-3 shadow-sm bg-white py-3'>
            <Container fluid>
                <Navbar.Brand href="#" className='fw-bold fs-4'>HA MART</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', textDecoration: 'none' }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link className="nave-link ml-12" style={{ textDecoration: 'none', color: "black" }} to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="nave-link mr-2" style={{ textDecoration: 'none', color: "black" }} to="/products">Product</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="nave-link mr-2" style={{ textDecoration: 'none', color: "black" }} to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="nave-link mr-2" style={{ textDecoration: 'none', color: "black" }} to="/contact">Contact</Link>
                        </Nav.Link>

                    </Nav>
                    <div className='butttons'>
                        <Button variant="outline-dark me-1" to="login"> <i class="fa-solid fa-right-to-bracket"></i> Login</Button>
                        <Button variant="outline-dark me-1" to="register"> <i class="fa-solid fa-user"></i> Register</Button>
                        <Link to="/cart">
                            <Button variant="outline-dark me-1" to="cart">
                                <i class="fa-solid fa-cart-shopping"></i>
                                Cart(0)
                            </Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;