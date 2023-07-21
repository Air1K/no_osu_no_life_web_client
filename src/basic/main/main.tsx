import React from 'react';
import Logo from "./logo/logo";
import styles from './mainStyles.module.sass'
import {Container, Row, Col, Image} from "react-bootstrap";
import {motion} from "framer-motion";
import MyButton from "../../button/buttonInvite/myButton";
import AnimeGirl from '../../img/gif/AnimeGirl.gif'

const textAnimLeft = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    }),

}

const textAnimRight = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    }),
}


const Main = () => {
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

                            <motion.h1 custom={0.5} variants={textAnimLeft} className="display-5"
                                       style={{padding: '10vh 0 4vh'}}>
                                Добро пожаловать на сайт по серверу "No osu!-No Life"
                            </motion.h1>

                        </header>
                        <Row>
                            <Col className={styles.col_1}>
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
                                <Row>
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
                    <motion.div className={styles.marquee_container_div}>
                        <div className={styles.marquee_container}>
                            <p>
                                NO OSU! - NO LIFE - NO OSU! - NO OSU! - NO LIFE - NO OSU! -
                            </p>
                            <p>
                                NO OSU! - NO LIFE - NO OSU! - NO OSU! - NO LIFE - NO OSU! -
                            </p>
                        </div>

                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView={"visible"}
                                viewport={{amount: 0.2, once: false}}
                    >
                        <Row>
                            <Col>
                                <motion.h4 custom={0.5} variants={textAnimRight} className="display-6"
                                           style={{padding: '10vh 0 4vh'}}>
                                    Что тут можно делать:
                                </motion.h4>
                                <motion.article custom={1} variants={textAnimRight} className={`${styles.text_article}`}
                                                style={{padding: '0 0 4vh'}}>
                                    <ul className={`${styles.list4b}`}>
                                        <li>Узнать подробнее про наш сервер</li>
                                        <li>Обсуждать разные темы</li>
                                        <li>Пожаловаться на участника</li>
                                        <li>Оставлять и читать коментарии о сервере</li>
                                        <li>Скачивать скины и карты из видео</li>
                                        <li>Постить свои предложения по скинам и картам</li>
                                        <li>Просматривать рейтинги по контенту</li>
                                    </ul>
                                </motion.article>
                            </Col>
                            <Col>
                                <motion.h4 custom={0.5} variants={textAnimRight} className="display-6"
                                           style={{padding: '10vh 0 4vh'}}>
                                    Что тут можно делать:
                                </motion.h4>
                                <motion.article custom={1} variants={textAnimRight} className={`${styles.text_article}`}
                                                style={{padding: '0 0 4vh'}}>
                                    <ul className={`${styles.list4b}`}>
                                        <li>Узнать подробнее про наш сервер</li>
                                        <li>Обсуждать разные темы</li>
                                        <li>Пожаловаться на участника</li>
                                        <li>Оставлять и читать коментарии о сервере</li>
                                        <li>Скачивать скины и карты из видео</li>
                                        <li>Постить свои предложения по скинам и картам</li>
                                        <li>Просматривать рейтинги по контенту</li>
                                    </ul>
                                </motion.article>
                            </Col>
                        </Row>

                    </motion.div>
                </Container>
            </div>
        </main>
    );
};

export default Main;