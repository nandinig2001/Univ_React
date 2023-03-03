import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
// npm i react-bootstrap-dropdown

function Header() {
  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container" >
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title">
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <h3>University</h3>
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                   
                  </button>
                </div>
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/#about">Students</a>
                      </li>
                      <li>
                        <a href="/#skill">Examinations</a>
                      </li>
                      <li>
                        <a href="/#resume">Academics</a>
                      </li>
                      <li>
                        <a href="/#contact">Contact</a>
                      </li>
                      <li>
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Sign In
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <li><Dropdown.Item href="#/action-1">Student</Dropdown.Item></li>
                          <li><Dropdown.Item href="#/action-2">College</Dropdown.Item></li>
                          <li><Dropdown.Item href="#/action-3">University</Dropdown.Item></li>
                        </Dropdown.Menu>
                      </Dropdown>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;
