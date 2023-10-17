import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Header = () => {
    return (
        <div className="container-fluid">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Row className="w-100">
                    <Col lg={3} className="d-flex justify-content-center"> {/* Centering the content */}
                        <Navbar.Brand href="#home">
                            <div className="d-flex align-items-center">
                                <div className="header-icon">
                                    <img
                                        src={process.env.PUBLIC_URL + '/icons/Union.png'}
                                        alt="A blog icon"
                                        className="header__image"
                                    />
                                </div>
                                <div>
                                    <span>Meta</span>
                                    <span>Blog</span>
                                </div>
                            </div>
                        </Navbar.Brand>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center"> {/* Centering the content */}
                        <Navbar.Toggle
                            aria-controls="responsive-navbar-nav"
                            style={{
                                width: '40px',
                                height: '40px',
                                padding: 0,
                            }}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">Blog</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Single post</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Pages
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Contact
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col lg={3} className="d-flex justify-content-center align-items-center"> {/* Centering the content and vertically aligning it */}
                        <label className="d-flex justify-content-center align-items-center w-100"> {/* Centering and aligning the input */}
                            <input type="text" placeholder={'Search'} />
                        </label>
                    </Col>
                </Row>
            </Navbar>

        </div>
    );
};
