import React, {useEffect, useState} from 'react';
import {Row, Button, Form, Col, Container, Alert} from "react-bootstrap";
import styles from './styleAuthorization.module.sass'
import Registration from "./Registration";
import {errorsForm, validateFormLogIn} from "../../../validated/validated";
import User from "../../../utils/store/user";
import {observer} from "mobx-react-lite";
import user from "../../../utils/store/user";
import MyButton from "../../../button/buttonInvite/myButton";
import AuthButton from "../../../button/authButton";

const Authorization = ({setModalLigin}) => {
    console.log("рендер Authorization")
    const [panelAuthorization, setPanelAuthorization] = useState(true)
    const [form, setForm] = useState({
        userName: '', email: '', password: '', confirmPassword: '', agreement: false, authentication: false
    })
    const [errors, setErrors] = useState({})
    const [stateErrors, setStateErrors] = useState({})
    const setField = (field, value)=>{
        setForm({
            ...form,
            [field]: value
        })
        if(!!errors[field]){
            setErrors({
                ...errors,
                [field]: null
            })
        }
    }

    const handleSubmit = async (event) => {
        const {formErrors, stateErr} = validateFormLogIn(form)

        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
        } else {
            event.preventDefault();
            await User.login(form.email, form.password).then(()=>{
                setModalLigin(false);
                console.log("Выполнил then")
            }).catch(()=>{

            })
            console.log(user.messages === '', "<---Проверка messages")
            if(user.messages){
                const {formErrors, stateErr} = errorsForm(user.messages)
                setErrors(formErrors)
                setStateErrors(stateErr)
            } else {

                console.log("Закрыл")
            }
        }
        setStateErrors(stateErr)


    };

    return (
        <Container className={"px-2 py-4"}>
            {
                panelAuthorization ?
                    <Form className={`${styles.form_container} m-auto`} noValidate validated={!errors} onSubmit={handleSubmit}>
                        <div className={"text-center"}><h5>Login</h5></div>
                        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={form.email}
                                onChange={(e)=>{setField('email', e.target.value)}}
                                required type="email"
                                placeholder="Enter email"
                                isInvalid={!!errors['email']}
                                isValid={stateErrors["email"]}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors['email']}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                isInvalid={!!errors['password']}
                                type="password"
                                onChange={(e)=>{setField('password', e.target.value)}}
                                placeholder="Password"
                                value={form.password}
                                isValid={stateErrors["password"]}
                            />
                            <Form.Control.Feedback type="invalid">
                                <Row><Col xs = {7}>{errors['password']}</Col>{user.errors[0]?.attempt <= 3 && user.errors[0]?.attempt!==0 ?  <Col className={"text-end"}>Осталось попыток: {user.errors[0]?.attempt}</Col> : ""}</Row>
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col xs={5}>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" label="Не выходить"/>
                                    </Form.Group>
                                </Col>
                                <Col xs={7} className={"d-flex justify-content-end"}>
                                    <a className={`link-dark ${styles.pointer_a}`}><strong>Восстановить пароль</strong></a>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <AuthButton  errorsMasage={errors} setErrors={setErrors} setStateErrors={setStateErrors}/>
                        </Form.Group>
                        <Form.Group className={"d-flex align-content-center justify-content-center"}>
                            <Form.Label>Нет аккаунта?</Form.Label> &nbsp; <a onClick={()=>{setPanelAuthorization(false)}} className={`link-dark pe-auto ${styles.pointer_a}`}><strong>Зарегистрироваться</strong></a>
                        </Form.Group>
                    </Form>
                    :
                    <Registration setPanelAuthorization={setPanelAuthorization}/>
            }
        </Container>
    );
};

export default observer(Authorization);

// {/*<div className={styles.container_img}>*/}
// {/*    <ImagesFon/>*/}
// {/*</div>*/}
//
// {/*<Container>*/}
//
// {/*</Container>*/}
// {/*<Footer/>*/}