import React, {useState} from 'react';
import {motion} from "framer-motion";
import {Row, Col, Image, Container, Card, Collapse, Alert} from "react-bootstrap";
import {textAnimLeft, textAnimRight} from '../../../framer_motion/blokAnim'
import styles from './stylesAdmin.module.sass'

const AdminInfo = () => {
    const [open, setOpen] = useState([{
        name: 'user1',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online',
        drop: false
    }, {
        name: 'user2',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online',
        drop: false
    }, {
        name: 'user3',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online',
        drop: false
    }, {
        name: 'user4',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online',
        drop: false
    }, {
        name: 'user5',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13g',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online',
        drop: false
    }

        // {
        //     name: 'user6',
        //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        //     role: 'admin',
        //     specificity: 'Текст - ...',
        //     status: 'online'
        // }, {
        //     name: 'user7',
        //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        //     role: 'admin',
        //     specificity: 'Текст - ...',
        //     status: 'online'
        // }, {
        //     name: 'user8',
        //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        //     role: 'admin',
        //     specificity: 'Текст - ...',
        //     status: 'online'
        // }
    ]);
    // const objAdminUser = [{
    //     name: 'user1',
    //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
    //     role: 'admin',
    //     specificity: 'Текст - ...',
    //     status: 'online',
    //     drop: false
    // }, {
    //     name: 'user2',
    //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
    //     role: 'admin',
    //     specificity: 'Текст - ...',
    //     status: 'online',
    //     drop: false
    // }, {
    //     name: 'user3',
    //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
    //     role: 'admin',
    //     specificity: 'Текст - ...',
    //     status: 'online',
    //     drop: false
    // }, {
    //     name: 'user4',
    //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
    //     role: 'admin',
    //     specificity: 'Текст - ...',
    //     status: 'online',
    //     drop: false
    // }, {
    //     name: 'user5',
    //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13g',
    //     role: 'admin',
    //     specificity: 'Текст - ...',
    //     status: 'online',
    //     drop: false
    // }
    //
    //     // {
    //     //     name: 'user6',
    //     //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
    //     //     role: 'admin',
    //     //     specificity: 'Текст - ...',
    //     //     status: 'online'
    //     // }, {
    //     //     name: 'user7',
    //     //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
    //     //     role: 'admin',
    //     //     specificity: 'Текст - ...',
    //     //     status: 'online'
    //     // }, {
    //     //     name: 'user8',
    //     //     userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
    //     //     role: 'admin',
    //     //     specificity: 'Текст - ...',
    //     //     status: 'online'
    //     // }
    // ];
    function handleClick(id) {
        setOpen(open.map((shape, index) =>
            index === id ?
            {
                ...shape,
                drop: !shape.drop
            } :
                shape
        ));
    }
    const timeView = (index)=>{
        return 0.3 * index
    }
    return (
        <motion.div initial="hidden"
                    whileInView={"visible"}
                    viewport={{amount: 0.2, once: false}}>
            <Row>
                <Col>
                    <motion.h4 custom={0.5} variants={textAnimLeft} className="display-6 mb-4">Кто администрирует сервер:
                    </motion.h4>
                </Col>
            </Row>
            <Container fluid>
                <Row className={"justify-content-center"}>
                    {open.map((user, index) =>
                        // s={1} md={3} xm={1} xl={1} xxl={2} xxxl={2}

                        <Col key={index}  className={`m-3  col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2`}>
                            <motion.div custom={timeView(index)} variants={textAnimLeft}>
                            <Card onClick={() => {handleClick(index)}}
                                  aria-controls="example-collapse-text"
                                  aria-expanded={open[index].drop}
                            className={styles.user}>
                                <Card.Img variant="top" src={`${user.userAvatar}`}/>
                                <Card.Header>
                                    <h5>
                                        {user.name}
                                    </h5>
                                    {user.role} <br/> {user.status}
                                </Card.Header>
                                <Collapse in={open[index].drop}>
                                    <Collapse in={open[index].drop}>
                                        <div id="example-collapse-text" > <Card.Body>{user.specificity}</Card.Body></div>
                                    </Collapse>
                                </Collapse>
                            </Card>

                            {/*<Row><Image src={`${user.userAvatar}`} roundedCircle className={` p-0 `}/></Row>*/}
                                {/*<Row></Row>*/}
                            </motion.div>
                        </Col>

                    )}
                </Row>
                <Row>
                    <Alert className={"my-4"} variant={"secondary"} style={{textAlign: "center"}}>
                        Если у вас остались некоторые вопросы, пишите администрации.
                    </Alert>
                </Row>
            </Container>
        </motion.div>
    );
};

export default AdminInfo;