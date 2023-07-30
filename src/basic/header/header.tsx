import React, {useState} from 'react';
import styles from './header.module.sass'
import {Navbar, Nav, Container, NavDropdown, Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BiUser} from "react-icons/bi"
import MyModal_v1 from "../my_modal/MyModal_v1";
import Authorization from "../tab_window/authorization/Authorization";
import {observer} from "mobx-react-lite";
import user from '../../utils/store/user'
import UserPanel from "./user_panel/userPanel";

const Header = observer(() => {
    console.log("рендер Header")
    const [modalLogin, setModalLigin] = useState(false)
    const [dropUserPanel, setDropUserPanel] = useState(false)

    return (
        <header className={`${styles.blure} w-100`}>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light"
                    className={`${styles.head} position-relative w-100`}>
                <Container className={styles.container_main}>
                    <Navbar.Brand className={"fw-bold"}>
                        No osu! - No life
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className={"px-40 justify-content-end"}>
                        <Nav className={`my-2 my-lg-0 text-sm-center ${styles.nav}`}>
                            <Link to="/" className={`nav-link navbar-text text-nowrap mx-1`}>Главное окно</Link>
                            <NavDropdown title="Общение" id="basic-nav-dropdown" className={"mx-1"}>
                                <Link to="/discussions" className={"dropdown-item text-sm-center "}>Обсуждения</Link>
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Жалобы на
                                    участников</Link>
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Комментарии
                                    сервера</Link>
                            </NavDropdown>
                            <NavDropdown title="Тематика osu" id="basic-nav-dropdown" className={"mx-1"}>
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Скины</Link>
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Карты</Link>
                                <Link to="/comments" className={`dropdown-item text-sm-center`}>Ваши предложения</Link>
                                <Link to="/discussions" className={"dropdown-item text-sm-center"}>Рейтинг</Link>
                            </NavDropdown>
                            <Link to="/links" className={`nav-link navbar-text text-nowrap mx-1`}>Полезные ссылки</Link>
                            <Nav.Link onClick={() => {
                                window.open("https://www.facebook.com/", "_blank")
                            }} target="_blank" className={"mx-1"}>
                                {/*<Link to="/links" className={`nav-link navbar-text`}>Поддержка</Link>*/}
                                Поддержка
                            </Nav.Link>
                            <Link to="/links" className={`nav-link navbar-text text-nowrap mx-1`}>О нас</Link>
                        </Nav>

                        <Nav className={`text-nowrap text-sm-center ${styles.buttionLog}`}>
                            {user.isAuth ?
                                <UserPanel dropUserPanel={dropUserPanel} setDropUserPanel={setDropUserPanel}/>
                                :
                                <Button variant="btn btn-light" onClick={() => {
                                    setModalLigin(true)
                                }}><BiUser/>log In</Button>
                            }

                            {/*<Button variant="btn btn-link">Sign Out</Button>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

            {/*--------------Модальные окна------------*/}

            {modalLogin && <MyModal_v1 show={modalLogin} onHide={() => setModalLigin(false)}><Authorization/></MyModal_v1>}
        </header>
    );
});

export default Header;