import React from 'react';
import {motion} from "framer-motion";
import {Row, Col, Image, Container} from "react-bootstrap";
import {textAnimLeft, textAnimRight} from '../../../framer_motion/blokAnim'

const AdminInfo = () => {
    const objAdminUser = [{
        name: 'user1',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online'
    }, {
        name: 'user2',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online'
    }, {
        name: 'user3',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online'
    }, {
        name: 'user4',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online'
    }, {
        name: 'user5',
        userAvatar: 'https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13g',
        role: 'admin',
        specificity: 'Текст - ...',
        status: 'online'
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
    ];

    return (
        <motion.div initial="hidden"
                    whileInView={"visible"}
                    viewport={{amount: 0.2, once: false}}>
            <Row>
                <Col>
                    <motion.h4 custom={0.5} variants={textAnimLeft} className="display-6">Кто администрирует сервер:
                    </motion.h4>
                </Col>
            </Row>
            <Container fluid>
                <Row className={"justify-content-center"}>
                    {objAdminUser.map((user, index) =>
                        <Col key={index} xm={4} xl={3} xxl={2} xxxl={2} className={"px-4"}>
                            <Row><Image src={`${user.userAvatar}`} roundedCircle className={"shadow p-0"}/></Row>
                            <Row>{user.name}</Row>
                            <Row>{user.role}</Row>
                            <Row>{user.specificity}</Row>
                            <Row>{user.status}</Row>
                        </Col>
                    )}
                </Row>
            </Container>
        </motion.div>
    );
};

export default AdminInfo;