import React from 'react';
import {Container, Image} from "react-bootstrap";
import styles from './logo.module.sass'
const ImgParrent = require('../../../img/head2.png')
const ImgChildren = require('../../../img/logo-2.png')
const Logo = () => {
    return (
        <div>
            <div className={`page-title ${styles.img_fon}`}></div>
            <Container className={styles.logo_container}>
                <Image src={ImgParrent} fluid alt="Responsive image"/>
                <Image src={ImgChildren} fluid alt="Responsive image"/>
            </Container>
        </div>
    );
};

export default Logo;