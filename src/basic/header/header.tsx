import React from 'react';
import styles from './header.module.sass'
import {Navbar, Nav, Container, NavDropdown, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BiUser} from "react-icons/bi"

const Header = () => {
    return (
        <header className={`${styles.blure} w-100`}>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light"
                    className={`${styles.head} position-realtive w-100`}>
                <Container className={styles.heads}>
                    <Navbar.Brand>
                        No osu! - No life
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className={"px-40 justify-content-end"}>
                        <Nav className={`my-2 my-lg-0 text-sm-center ${styles.nav}`}>
                            <Link to="/" className={`nav-link navbar-text text-nowrap`}>Главное окно</Link>
                            <NavDropdown title="Общение" id="basic-nav-dropdown">
                                <Link to="/discussions" className={"dropdown-item text-sm-center"}>Обсуждения</Link>
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Жалобы на
                                    участников</Link>
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Комментарии
                                    сервера</Link>
                            </NavDropdown>
                            <NavDropdown title="Тематика osu" id="basic-nav-dropdown">
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Скины</Link>
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Карты</Link>
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Ваши предложения</Link>
                                <Link to="/discussions" className={"dropdown-item text-sm-center"}>Рейтинг</Link>
                            </NavDropdown>
                            <Link to="/links" className={`nav-link navbar-text text-nowrap`}>Полезные ссылки</Link>
                            <Nav.Link onClick={() => {
                                window.open("https://www.facebook.com/", "_blank")
                            }} target="_blank">
                                {/*<Link to="/links" className={`nav-link navbar-text`}>Поддержка</Link>*/}
                                Поддержка
                            </Nav.Link>
                            <Link to="/links" className={`nav-link navbar-text text-nowrap`}>О нас</Link>
                        </Nav>

                        <Nav className={`mr-auto text-nowrap ${styles.login_margin}`}>
                            <Button variant="btn btn-light"><BiUser/>log In</Button>
                            {/*<Button variant="btn btn-link">Sign Out</Button>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    );
};

export default Header;