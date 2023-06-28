import React from 'react';
import {Container, Image} from "react-bootstrap";
import styles from './logo.module.sass'
const ImgParrent = require('../../../img/head2.png')
const ImgChildren = require('../../../img/logo-2.png')
const Fon = require("../../../img/osu_fon/0.png")

const Logo = () => {
    return (
        <div>
            <div className={`${styles.img_fon} w-100`}>
                <Image src={Fon} fluid alt="image position-absolute"/>
            </div>
            <Container className={styles.logo_container}>
                <Image src={ImgParrent} fluid alt="Responsive image position-absolute"/>
                <Image src={ImgChildren} fluid alt="Responsive image"/>
            </Container>
        </div>
    );
};

export default Logo;