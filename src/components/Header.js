import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div>
<Navbar bg="dark" variant="light">
        <Container>
          <Navbar.Brand href="#home"><h1 className='text-white'>ShoeRack</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='text-white text-decoration-none'><Link className='text-white text-decoration-none' to={`/`}>Home</Link></Nav.Link>
            <Nav.Link className='text-white'><Link className='text-white text-decoration-none' to={`/dashboard`}>Dashboard</Link></Nav.Link>
            <Nav.Link  className='text-white'><Link className='text-white text-decoration-none' to={`/login`}>Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  )
}

export default Header