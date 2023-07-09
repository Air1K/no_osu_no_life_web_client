import React from 'react';
import styles from './styleFooter.module.sass'
import {Container} from "react-bootstrap";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                Футер
            </Container>

        </footer>
    );
};

export default Footer;