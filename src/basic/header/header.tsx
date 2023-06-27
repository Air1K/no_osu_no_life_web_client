import React from 'react';
import styles from './header.module.sass'
import {Navbar, Nav, Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return (

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={styles.head}>
                    <Container className={styles.heads}>
                    <Navbar.Brand>
                            No osu! - No life
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className={"px-40"}>
                            <Nav className="me-auto my-2 my-lg-0">
                                <Nav.Link><Link to="/main" className={`nav-link`}>Главное окно</Link></Nav.Link>
                                <Nav.Link><Link to="/discussions" className={`nav-link`}>Обсуждения</Link></Nav.Link>
                                <Nav.Link><Link to="/comments" className={`nav-link`}>Комментарии сервера</Link></Nav.Link>
                                <Nav.Link><Link to="/links" className={`nav-link`}>Полезные ссылки</Link></Nav.Link>
                                <Nav.Link><a href={"https://www.donationalerts.com/r/lolioosu"} className={`nav-link`}>Поддержка</a></Nav.Link>
                            </Nav>

                            <Nav className="mr-auto">
                                <Button variant="btn btn-link">Log In</Button>
                                <Button variant="btn btn-link">Sign Out</Button>
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                </Navbar>

    );
};

export default Header;