import React from 'react';
import styles from './styleFooter.module.sass';
import {Container} from "react-bootstrap";
import {BsTelegram, BsDiscord} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {Link} from "react-router-dom";
import {GrDiamond} from "react-icons/gr";
import {MdEmail} from "react-icons/md";
const Footer = () => {
    console.log("рендер Footer")
    return (
        <footer className={`text-center text-lg-start text-muted ${styles.footer}`}>
            <Container>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <span>Присоединяйтесь к нам в социальных сетях:</span>
                    </div>

                    <div className={styles.social_networks}>
                        <a href="" className="me-4 link-secondary">
                            <BsTelegram/>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <BsDiscord/>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-12 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <GrDiamond/> NO OSU! - NO LIFE
                                </h6>
                                <p>
                                    Мы надеемся, что наш сайт будет полезен для вас и поможет вам получить необходимую информацию. Если у вас есть какие-либо вопросы или предложения, пожалуйста, свяжитесь с нами. Спасибо за использование нашего сайта!
                                </p>
                            </div>
                            <div className="col-md-12 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Навигация по сайту
                                </h6>
                                <p>
                                    <Link to="/" className={`text-reset`}>Главное окно</Link>
                                </p>
                                <p>
                                    <Link to="/discussions" className={"text-reset"}>Обсуждения</Link>
                                </p>
                                <p>
                                    <Link to="/comments" className={`text-reset`}>Жалобы на
                                        участников</Link>
                                </p>
                                <p>
                                    <Link to="/comments" className={`text-reset`}>Комментарии
                                        сервера</Link>
                                </p>
                                <p>
                                    <Link to="/comments" className={`text-reset`}>Скины</Link>
                                </p>
                                <p>
                                    <Link to="/comments" className={`text-reset`}>Карты</Link>
                                </p>
                                <p>
                                    <Link to="/comments" className={`text-reset`}>Ваши предложения</Link>
                                </p>
                                <p>
                                    <Link to="/discussions" className={"text-reset"}>Рейтинг</Link>
                                </p>
                                <p>
                                    <Link to="/links" className={`text-reset`}>Полезные ссылки</Link>
                                </p>
                            </div>

                            <div className="col-md-12 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Вопросы
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Что дает админка</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Как получить админку</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Сотрудничество</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Помощь</a>
                                </p>
                            </div>

                            <div className="col-md-12 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Разработка сайтов</h6>
                                <p>
                                    <a href="" className="me-4 nav-link">
                                        <AiFillGithub/> GitHub
                                    </a>
                                </p>
                                <p className={"text-nowrap"}><MdEmail/> veremeenkom91@gmail.com</p>
                                <a href="" className="me-4 nav-link">
                                    <BsTelegram/> Веремеенко Максим
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
                    © 2023 No osu! - No life
                </div>
            </Container>
        </footer>
    );
};

export default Footer;