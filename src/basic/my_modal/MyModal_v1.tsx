import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './stylesMyModal_v1.module.sass'
const MyModalV1 = (props) => {
    console.log("рендер MyModalV1")
    return (
        <Modal {...props}
               size="md"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               className={styles.parent}
        >
            {props.children}
        </Modal>
    );
};

export default MyModalV1;