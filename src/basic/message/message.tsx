import React, {useEffect, useState} from 'react';
import {Alert} from "react-bootstrap";
import user from "../../utils/store/user";
import styles from './messageStyles.module.sass'

const Message = () => {
    console.log("Рендер Message")
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState(false);
    const [classShow, setClassshow] = useState({})
    useEffect(() => {
        if (localStorage.getItem('token')) {
                user.checkAuth()
        }
        user.ping().then((num)=>{
            console.log(num)
        }).catch((err) => {
            setShow(true);
            setErrors(true);
            setClassshow(styles.show);
            setTimeout(() => {
                setShow(false)
            }, 15000);
            console.log(err)
        })
    }, [])

    return (
        <div>
            <Alert show={show} variant="danger"
                   className={`position-fixed bottom-0 end-0 mx-2 error_window ${classShow}`}
                   onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Похоже сервер не отвечает :(</Alert.Heading>
                <p>
                    В данном режиме вы можете просматривать основную информацию, но не сможете авторизироваться и
                    делиться контентом.
                </p>
                <hr/>
                <p>
                    Вы можете узнать подробности написав нам <a className={"link-dark"}
                                                                href="https://t.me/airistia">@airistia</a>
                </p>
            </Alert>
        </div>
    );
};

export default Message;