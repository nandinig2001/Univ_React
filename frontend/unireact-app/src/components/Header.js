import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

function Header() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    fetch(`${this.props.baseUrl}/api-auth/login-status/`)
      .then(response => response.json())
      .then(data => setIsLoggedIn(data.isLoggedIn))
      .catch(error => console.error('login status error', error));
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "8rem" }}>
      <Container>
        <Navbar.Brand href="home" style={{ color: "white", fontSize: "25px", fontWeight: "2rem", padding: "15px" }}>University</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ paddingRight: "3rem" }}>
            <NavDropdown title="Admissions" id="collasible-nav-dropdown" style={{ color: "white", fontSize: "15px", paddingRight: "3rem" }}>
              <NavDropdown.Item href="admissions" style={{ fontSize: "15px" }}>Colleges</NavDropdown.Item>
              <NavDropdown.Item href="Admissionpro" style={{ fontSize: "15px" }}>Application/Process</NavDropdown.Item>
              {/* <NavDropdown.Item href="" style={{fontSize:"15px"}}>Fee Payment</NavDropdown.Item>
              <NavDropdown.Item href="" style={{fontSize:"15px"}}>Financial Aid Grant</NavDropdown.Item> */}

            </NavDropdown>

            <Nav>
              <NavDropdown title="Examinations" id="collasible-nav-dropdown" style={{ color: "white", fontSize: "15px", paddingRight: "3rem" }}>
                <NavDropdown.Item href="examform" style={{ fontSize: "15px" }}>Examination Form</NavDropdown.Item>
                <NavDropdown.Item href="examschedule" style={{ fontSize: "15px" }}>Examination Schedule</NavDropdown.Item>
                <NavDropdown.Item href="Hallticket" style={{ fontSize: "15px" }}>Examination Hall Ticket</NavDropdown.Item>

              </NavDropdown>
            </Nav>

            <Nav>
              <NavDropdown title="Results" id="collasible-nav-dropdown" style={{ color: "white", fontSize: "15px", paddingRight: "3rem" }}>
                <NavDropdown.Item href="Result" style={{ fontSize: "15px" }}>View Results</NavDropdown.Item>
                <NavDropdown.Item href="" style={{ fontSize: "15px" }}>Reval Application</NavDropdown.Item>

              </NavDropdown>
            </Nav>

            <Nav.Link href="https://www.library.iitb.ac.in/" style={{ color: "white", fontSize: "15px", paddingRight: "3rem" }}>Library</Nav.Link>
          </Nav>

          {isLoggedIn ? (
            <Nav>
              <NavDropdown title={
                <span>
                  <img
                    src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="profile-for-user"
                  />
                </span>
              } id="collasible-nav-dropdown" style={{ color: "black", fontSize: "15px", paddingLeft: "30px" }}>
                <NavDropdown.Item href="Myprofile" style={{ fontSize: "15px" }}>My Profile</NavDropdown.Item>
                <NavDropdown.Item href="Myrecords" style={{ fontSize: "15px" }}>My Records</NavDropdown.Item>
                <NavDropdown.Item href="Notification" style={{ fontSize: "15px" }}>Notifications</NavDropdown.Item>
                <NavDropdown.Item href="#" style={{ fontSize: "15px" }} onClick={() => setIsLoggedIn(false)}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <NavDropdown title="Log In" id="collasible-nav-dropdown" style={{ color: "black", fontSize: "15px" }}>
                <NavDropdown.Item href="SLoginForm" style={{ fontSize: "15px" }}>Student</NavDropdown.Item>
                <NavDropdown.Item href="CLoginForm" style={{ fontSize: "15px" }}>College</NavDropdown.Item>
                {/* <NavDropdown.Item href="#" style={{fontSize:"15px"}}>University</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          )}


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;