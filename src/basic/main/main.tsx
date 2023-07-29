import React from 'react';
import Logo from "./logo/logo";
import styles from './mainStyles.module.sass'
import {Container, Row, Col, Image} from "react-bootstrap";
import {motion} from "framer-motion";
import MyButton from "../../button/buttonInvite/myButton";
import AnimeGirl from '../../img/gif/AnimeGirl.gif'
import Hmm from '../../img/hmm.png'
import Footer from "../footer/footer";
import AdminInfo from "./admin_info/adminInfo";
import {textAnimLeft, textAnimRight} from '../../framer_motion/blokAnim'

const Main = () => {
    console.log("рендер Main")
    return (
        <main>
            <Logo/>
            <div className={`${styles.main_block}`}>
                <Container>
                    <motion.div initial="hidden"
                                whileInView={"visible"}
                                viewport={{amount: 0.2, once: false}}
                    >
                        <header>

                            <motion.h1 custom={0.2} variants={textAnimLeft} className="display-5 mb-4"
                                       style={{paddingTop: '10vh'}}>
                                Добро пожаловать на сайт по серверу "No osu!-No Life"
                            </motion.h1>

                        </header>
                        <Row>
                            <Col className={`${styles.col_1}`}>
                                <Row>
                                    <motion.div
                                    >
                                        <motion.article custom={0.5} variants={textAnimLeft}
                                                        className={`${styles.text_article} `}>
                                            <p>Приветствую всех, кто решил посетить наш сайт по Discord каналу "No
                                                osu!-No
                                                Life"! Здесь вы найдете всю необходимую информацию о нашем канале, его
                                                правилах и особенностях.</p>
                                        </motion.article>
                                        <motion.hr custom={0.5} variants={textAnimLeft}/>
                                        <motion.article custom={0.5} variants={textAnimLeft}
                                                        className={`${styles.text_article} `}>
                                            <p>Наш канал создан для общения и обмена информацией между людьми, которые
                                                интересуются определенной тематикой или просто хотят найти новых друзей.
                                                Мы
                                                предлагаем вам присоединиться к нашему сообществу и провести время в
                                                уютной
                                                и дружественной атмосфере. Присоединяйтесь к нам и откройте для себя
                                                новые
                                                возможности общения!</p>
                                        </motion.article>
                                    </motion.div>
                                </Row>
                                <Row className={"my-auto"}>
                                    <motion.div custom={0.5} variants={textAnimLeft}>
                                        <MyButton/>
                                    </motion.div>
                                </Row>
                            </Col>
                            <Col className={styles.img_container}>
                                <motion.div custom={0.5} variants={textAnimRight}>
                                    <div className={styles.blur}/>
                                    <Image src={AnimeGirl} alt={"..."}/>
                                </motion.div>
                            </Col>
                        </Row>
                    </motion.div>
                    {/*<motion.div className={styles.marquee_container_div}>*/}
                    {/*    <div className={styles.marquee_container}>*/}
                    {/*        <div>*/}
                    {/*            NO OSU! - NO LIFE*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            NO OSU! - NO LIFE*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            NO OSU! - NO LIFE*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            NO OSU! - NO LIFE*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            NO OSU! - NO LIFE*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</motion.div>*/}
                    {/*<motion.div initial="hidden"*/}
                    {/*            whileInView={"visible"}*/}
                    {/*            viewport={{amount: 0.2, once: false}}*/}
                    {/*            className={styles.state_user}*/}
                    {/*>*/}
                    {/*    <Row className={"align-items-center"}>*/}
                    {/*        <Col>*/}
                    {/*            <motion.h4 custom={0.5} variants={textAnimLeft} className="display-6 mb-4">*/}
                    {/*                Что тут можно делать:*/}
                    {/*            </motion.h4>*/}
                    {/*            <motion.article custom={1} variants={textAnimLeft} className={`${styles.text_article}`}*/}
                    {/*                            style={{padding: '0 0 4vh'}}>*/}
                    {/*                <ul className={`${styles.list4b}`}>*/}
                    {/*                    <li>Узнать подробнее про наш сервер</li>*/}
                    {/*                    <li>Обсуждать разные темы</li>*/}
                    {/*                    <li>Пожаловаться на участника</li>*/}
                    {/*                    <li>Оставлять и читать коментарии о сервере</li>*/}
                    {/*                    <li>Скачивать скины и карты из видео</li>*/}
                    {/*                    <li>Постить свои предложения по скинам и картам</li>*/}
                    {/*                    <li>Просматривать рейтинги по контенту</li>*/}
                    {/*                </ul>*/}
                    {/*            </motion.article>*/}
                    {/*        </Col>*/}
                    {/*        <Col className={styles.img_container}>*/}
                    {/*            <motion.div custom={0.5} variants={textAnimRight} >*/}
                    {/*                <Image src={Hmm} alt={"..."}/>*/}
                    {/*            </motion.div>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</motion.div>*/}

                    {/*<AdminInfo/>*/}
                    {/*<Footer/>*/}
                </Container>
            </div>
        </main>
    );
};

export default Main;