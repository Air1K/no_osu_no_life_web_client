import React, {memo, useEffect, useRef} from 'react';
import {Container, Image} from "react-bootstrap";
import styles from './logo.module.sass'
import {logoMove} from "../../../hook/logoMove";
const ImgParrent = require('../../../img/head2.png')
const ImgChildren = require('../../../img/NO-NLbac.png')
// const Fon = require("../../../img/osu_fon/13.png")

const Logo = memo(() => {
    console.log("Рендер ------> Logo")
    const ref1 = useRef()
    const ref2 = useRef()
    useEffect(()=>{
        logoMove(ref1, ref2)
    }, [])

    const nameImg = Math.floor(Math.random() * 11);


    return (
            <div className={`${styles.img_fon}`}>
                <div className={styles.container_logo_and_img}>
                    <Image src={require(`../../../img/osu_fon/${nameImg}.png`)} fluid alt="image position-absolute" className={styles.img}/>
                    <div className="anim_sneg sneg"></div>
                    <Container className={`${styles.logo_container} position-absolute top-50 start-50 translate-middle`}>
                        <Image ref={ref1} src={ImgParrent} alt="Responsive image position-absolute" className={`${styles.img_parent}`}/>
                        <div className={`position-absolute top-50 start-50 translate-middle w-100 ${styles.img_children_container}`}>
                            <Image ref={ref2} src={ImgChildren} alt="Responsive image position-image-center" className={`w-100 ${styles.img_children}`} />
                        </div>
                    </Container>
                </div>
            </div>
    );
});

export default Logo;