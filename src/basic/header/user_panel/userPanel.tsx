import React from 'react';
import {Image, Card, Collapse} from "react-bootstrap";
import styles from './styles_userPanel.module.sass'
import user from '../../../utils/store/user'
import {observer} from "mobx-react-lite";
const UserPanel = ({dropUserPanel, setDropUserPanel}) => {
    console.log("Рендер UserPanel")
    return (
        <div className={styles.container}>
            <a onClick={() => setDropUserPanel(!dropUserPanel)} className={styles.userlink}
               aria-controls="example-collapse-text"
               aria-expanded={dropUserPanel}>
                <Image src={`${user.user.userAvatar}`} className={styles.images} roundedCircle/>
            </a>
            <div className={`position-absolute top-0 start-0`}>
                <Collapse in={dropUserPanel} dimension="height">
                    <div id="example-collapse-text">
                        <Card body style={{maxWidth: '400px'}}>
                            <a onClick={()=>user.logout()}>Выйти</a>
                        </Card>
                    </div>
                </Collapse>
            </div>
        </div>

    );
};

export default observer(UserPanel);