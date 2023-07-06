import React from 'react';
import Logo from "./logo/logo";
import styles from './mainStyles.module.sass'

const Main = () => {
    return (
        <main>
            <Logo/>
            <div className={`${styles.main_block}`}>
                asdasdasd<br/><br/><br/><br/><br/>asdasddadasdsa
            </div>
        </main>
    );
};

export default Main;