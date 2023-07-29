import React, {useState} from 'react';
import styles from "./styleAuthorization.module.sass";
import {Button, Col, Form, Row} from "react-bootstrap";
import {validateFormSignUp} from "../../../validated/validated";
import User from '../../../utils/store/user'

const Registration = ({setPanelAuthorization}) => {
    console.log("рендер Registration")
    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreement: false
    })
    const [errors, setErrors] = useState({})
    const [stateErrors, setStateErrors] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field]) {
            setErrors({
                ...errors,
                [field]: null
            })
        }

        console.log(value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {formErrors, stateErr} = validateFormSignUp(form)
        if (Object.keys(formErrors).length > 0) {
            event.preventDefault();
            setErrors(formErrors)
        }else {
            await User.registration(form.userName, form.email, form.password, form.agreement )
        }
        setStateErrors(stateErr)
    };

    return (
        <Form className={`${styles.form_container} m-auto w-100`} noValidate validated={!errors}
              onSubmit={handleSubmit}>
            <div className={"text-center"}><h5>Sign Up</h5></div>
            <Form.Group as={Col} className="mb-3" controlId="validationCustom01">
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control
                    value={form.userName}
                    onChange={(e) => {
                        setField('userName', e.target.value)
                    }}
                    required type="text"
                    placeholder="Имя пользователя"
                    isInvalid={!!errors['userName']}
                    isValid={stateErrors["userName"]}
                />
                <Form.Control.Feedback type="invalid">
                    {errors['userName']}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control
                    value={form.email}
                    onChange={(e) => {
                        setField('email', e.target.value)
                    }}
                    required type="email"
                    placeholder="Электронная почта"
                    isInvalid={!!errors['email']}
                    isValid={stateErrors["email"]}
                />
                <Form.Control.Feedback type="invalid">
                    {errors['email']}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    value={form.password}
                    onChange={(e) => {
                        setField('password', e.target.value)
                    }}
                    required type="password"
                    placeholder="Пароль"
                    isInvalid={!!errors['password']}
                    isValid={stateErrors["password"]}
                />
                <Form.Control.Feedback type="invalid">
                    {errors['password']}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
                <Form.Label>Подтвердите пароль</Form.Label>
                <Form.Control
                    value={form.confirmPassword}
                    onChange={(e) => {
                        setField('confirmPassword', e.target.value)
                    }}
                    required type="password"
                    placeholder="Подтвердите пароль"
                    isInvalid={!!errors['confirmPassword']}
                    isValid={stateErrors["confirmPassword"]}
                />
                <Form.Control.Feedback type="invalid">
                    {errors['confirmPassword']}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
                <Form.Check
                    checked={form.agreement}
                    onChange={(e) => {
                        setField('agreement', !form.agreement)
                    }}
                    required type="checkbox"
                    label="Соглашение на обработку вашего Email"
                    feedback={errors['agreement']}
                    feedbackType="invalid"
                    isInvalid={!!errors['agreement']}
                    isValid={stateErrors["agreement"]}
                />
            </Form.Group>

            <Form.Group className="mb-3 ">
                <Button variant="outline-dark" type="submit" className={`${styles.button} w-100`}>
                    Зарегистрироваться
                </Button>
            </Form.Group>
            <Form.Group className={"d-flex align-content-center justify-content-center"}>
                <Form.Label>Есть аккаунта?</Form.Label> &nbsp; <a onClick={() => {
                setPanelAuthorization(true)
            }} className={`link-dark ${styles.pointer_a}`}><strong>Войти</strong></a>
            </Form.Group>
        </Form>
    );
};

export default Registration;