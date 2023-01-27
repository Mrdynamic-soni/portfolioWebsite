import React from 'react'
const Header = () => {
  return (
    <>
      <div className='container d-flex justify-content-between py-5 bg-transparent'>
        <div>
          <h1 className='heading'>Saurabh Soni</h1>
        </div>
        <div className='d-none d-lg-flex pt-4 links'>
          <a className='px-3 h4 opacity-75' href="#">About</a>
          <a className='px-3 h4 opacity-75'>Project</a>
          <a className='px-3 h4 opacity-75'>Contact</a>
          <a className='px-3 h4 opacity-75'>Achievements</a>
        </div>
      </div>
    </>
  )
}

export default Header;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Header = () => {
//   return (
//     <Navbar className='bg-transparent' bg="light" expand="lg">
//       <Container className='d-flex justify-content-between'>
//         <Navbar.Brand href="#home">Saurabh Soni</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">About</Nav.Link>
//             <Nav.Link href="#link">Projects</Nav.Link>
//             <Nav.Link href="#link">Achievements</Nav.Link>
//             <Nav.Link href="#link">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;