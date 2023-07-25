import React from 'react';
import styles from "../logo/logo.module.sass";
import {Image} from "react-bootstrap";

const nameImg = Math.floor(Math.random() * 11);
const ImagesFon = () => {
    console.log("рендер ImagesFon")
    return (
        <Image src={require(`../../../img/osu_fon/${nameImg}.png`)} fluid alt="image position-absolute" className={styles.img}/>
    );
};

export default ImagesFon;