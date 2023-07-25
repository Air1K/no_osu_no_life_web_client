import React from 'react';
import ImagesFon from "../../main/images_fon/imagesFon";
import Footer from "../../footer/footer";
import {Row, Button, Form, Col, Container} from "react-bootstrap";
import styles from './styleAuthorization.module.sass'

const Authorization = (props) => {
    console.log("рендер Authorization")
    return (
        <Container className={"p-5"}>
            <Form className={`${styles.form_container} m-auto w-100`}>
                <div className={"text-center"}><h5>Авторизация</h5></div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group>
                    <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Не выходить"/>
                        </Form.Group>
                    </Col>
                    <Col className={"d-flex justify-content-end"}>
                        <a href={"#"} className={"link-dark"}>Восстановить пароль</a>
                    </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="outline-dark" type="submit" className={`${styles.button} w-100`}>
                        Войти
                    </Button>
                </Form.Group>
                <Form.Group className={"d-flex align-content-center justify-content-end"}>
                    <Form.Label>Нет аккаунта?</Form.Label> &nbsp; <a href={"#"} className={"link-dark"}>Зарегистрироваться</a>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Authorization;

// {/*<div className={styles.container_img}>*/}
// {/*    <ImagesFon/>*/}
// {/*</div>*/}
//
// {/*<Container>*/}
//
// {/*</Container>*/}
// {/*<Footer/>*/}