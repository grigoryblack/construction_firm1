import "./portfolio.css";
import Modal from '../modalWindow/index';
import {useState} from "react";
import House1 from "./HousePick/ModalHouse/house1.jsx";
import House2 from "./HousePick/ModalHouse/house2.jsx";
import House3 from "./HousePick/ModalHouse/house3.jsx";
import House4 from "./HousePick/ModalHouse/house4.jsx";
import House5 from "./HousePick/ModalHouse/house5.jsx";
import House6 from "./HousePick/ModalHouse/house6.jsx";
import House7 from "./HousePick/ModalHouse/house7.jsx";
import House8 from "./HousePick/ModalHouse/house8.jsx";


import { motion, AnimatePresence } from 'framer-motion';

const blockAnimationPortfolio = {
    hidden:{
        y:200,
        opacity: 0,
    },
    visible: custom => ({
        animation: "move 5s",
        y:0,
        opacity: 1,
        transition: { delay: custom * 0.14 },
    }),
}

function Portfolio() {

    /*Модалка 1 дома*/
    const [showModalHouse1, setShowModalHouse1] = useState(false);
    const handleModalHouse1Open = () => {
        setShowModalHouse1(true);
    };

    const handleModalHouse1Close = () => {
        setShowModalHouse1(false);
    };

    /*Модалка 2 дома*/
    const [showModalHouse2, setShowModalHouse2] = useState(false);
    const handleModalHouse2Open = () => {
        setShowModalHouse2(true);
    };

    const handleModalHouse2Close = () => {
        setShowModalHouse2(false);
    };


    /*Модалка 3 дома*/
    const [showModalHouse3, setShowModalHouse3] = useState(false);
    const handleModalHouse3Open = () => {
        setShowModalHouse3(true);
    };

    const handleModalHouse3Close = () => {
        setShowModalHouse3(false);
    };

    /*Модалка 4 дома*/
    const [showModalHouse4, setShowModalHouse4] = useState(false);
    const handleModalHouse4Open = () => {
        setShowModalHouse4(true);
    };

    const handleModalHouse4Close = () => {
        setShowModalHouse4(false);
    };

    /*Модалка 5 дома*/
    const [showModalHouse5, setShowModalHouse5] = useState(false);
    const handleModalHouse5Open = () => {
        setShowModalHouse5(true);
    };

    const handleModalHouse5Close = () => {
        setShowModalHouse5(false);
    };

    /*Модалка 6 дома*/
    const [showModalHouse6, setShowModalHouse6] = useState(false);

    const handleModalHouse6Open = () => {
        setShowModalHouse6(true);
    };

    const handleModalHouse6Close = () => {
        setShowModalHouse6(false);
    };

    /*Модалка 7 дома*/
    const [showModalHouse7, setShowModalHouse7] = useState(false);

    const handleModalHouse7Open = () => {
        setShowModalHouse7(true);
    };

    const handleModalHouse7Close = () => {
        setShowModalHouse7(false);
    };

    /*Модалка 8 дома*/
    const [showModalHouse8, setShowModalHouse8] = useState(false);

    const handleModalHouse8Open = () => {
        setShowModalHouse8(true);
    };

    const handleModalHouse8Close = () => {
        setShowModalHouse8(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="portfolio">
            <div className="portfolio-wrapper">
                <div className="portfolio-title">Популярные проекты</div>
                <motion.div initial="hidden"
                     whileInView="visible"
                     viewport={{once:true}}
                     className="portfolio-container-1">
                    <motion.div custom={1} variants={blockAnimationPortfolio} className="portfolio-item-1">
                        <img src='src/Page/Components/Portfolio/HousePick/House1/razdel-AR_Page6_Image1.jpg' alt="pic1" className="portfolio-pick"/>
                        <div className="title-item">
                            <div className="portfolio-title-1"> Проект дома 1</div>
                            <div className="portfolio-subtitle-1">Площадь - 57,5 кв.м / Стоимость - от 1.7 млн.₽</div>
                            <button className="portfolio-button" onClick={handleModalHouse1Open}>Подробнее</button>
                        </div>
                    </motion.div>
                    <Modal show={showModalHouse1} onClose={handleModalHouse1Close}>
                        <House1/>
                    </Modal>
                    <motion.div custom={2} variants={blockAnimationPortfolio} className="portfolio-item-1">
                        <img src='src/Page/Components/Portfolio/HousePick/House2/kd_Page7_Image1.jpg' alt="pic2" className="portfolio-pick"/>
                        <div className="title-item">
                            <div className="portfolio-title-1"> Проект дома 2</div>
                            <div className="portfolio-subtitle-1">Площадь - 152,24 кв.м / Стоимость - от 4.5 млн.₽</div>
                            <button className="portfolio-button" onClick={handleModalHouse2Open}>Подробнее</button>
                        </div>
                    </motion.div>
                    <Modal show={showModalHouse2} onClose={handleModalHouse2Close}>
                        <House2/>
                    </Modal>
                    <motion.div custom={3} variants={blockAnimationPortfolio} className="portfolio-item-1">
                        <img src='src/Page/Components/Portfolio/HousePick/House3/kd_Page7_Image1.jpg' alt="pic3" className="portfolio-pick"/>
                        <div className="title-item">
                            <div className="portfolio-title-1"> Проект дома 3</div>
                            <div className="portfolio-subtitle-1">Площадь - 202,16 кв.м. / Стоимость - от 6 млн.₽</div>
                            <button className="portfolio-button" onClick={handleModalHouse3Open}>Подробнее</button>
                        </div>
                    </motion.div>
                    <Modal show={showModalHouse3} onClose={handleModalHouse3Close}>
                        <House3/>
                    </Modal>
                </motion.div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{height: 0, opacity: 0}}
                                    animate={{height: 'auto', opacity: 1}}
                                    exit={{height: 0, opacity: 0}}>
                                <div className="portfolio-container-1">
                                    <div className="portfolio-item-1">
                                        <img src='src/Page/Components/portfolio/HousePick/House6/img302_34932_1170p.jpg' alt="pic1" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Проект дома 4</div>
                                            <div className="portfolio-subtitle-1">Площадь - 111.40 кв.м / Стоимость - от 3.33 млн.₽</div>
                                            <button className="portfolio-button" onClick={handleModalHouse4Open}>Подробнее</button>
                                        </div>
                                    </div>
                                    <Modal show={showModalHouse4} onClose={handleModalHouse4Close}>
                                        <House6/>
                                    </Modal>
                                    <div  className="portfolio-item-1">
                                        <img src='src/Page/Components/portfolio/HousePick/House7/img2787_39155_1170.jpeg' alt="pic2" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Проект дома 5</div>
                                            <div className="portfolio-subtitle-1">Площадь - 148.23 кв.м / Стоимость - от 4.44 млн.₽</div>
                                            <button className="portfolio-button" onClick={handleModalHouse5Open}>Подробнее</button>
                                        </div>
                                    </div>
                                    <Modal show={showModalHouse5} onClose={handleModalHouse5Close}>
                                        <House7/>
                                    </Modal>
                                    <div  className="portfolio-item-1">
                                        <img src='src/Page/Components/portfolio/HousePick/House8/img137_33958_1170p.jpg' alt="pic3" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Проект дома 6</div>
                                            <div className="portfolio-subtitle-1">Площадь - 110.90 кв.м. / Стоимость - от 3.30 млн.₽</div>
                                            <button className="portfolio-button" onClick={handleModalHouse6Open}>Подробнее</button>
                                        </div>
                                        <Modal show={showModalHouse6} onClose={handleModalHouse6Close}>
                                            <House8/>
                                        </Modal>
                                    </div>
                                </div>
                                <div className="portfolio-container-2">
                                    <div className="portfolio-item-2">
                                        <img src='src/Page/Components/Portfolio/HousePick/House4/kd_Page7_Image1.jpg' alt="pic4" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Проект дома 7</div>
                                            <div className="portfolio-subtitle-1">Площадь - 254 кв.м. / Стоимость - от 7.62 млн.₽</div>
                                            <button className="portfolio-button" onClick={handleModalHouse7Open}>Подробнее</button>
                                        </div>
                                    </div>
                                    <Modal show={showModalHouse7} onClose={handleModalHouse7Close}>
                                        <House4/>
                                    </Modal>
                                    <div className="portfolio-item-2">
                                        <img src='src/Page/Components/Portfolio/HousePick/House5/kd_Page7_Image1.jpg' alt="pic5" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Проект дома 8</div>
                                            <div className="portfolio-subtitle-1">Площадь - 238,21 кв.м. / Стоимость - от 7.14 млн.₽</div>
                                            <button className="portfolio-button" onClick={handleModalHouse8Open}>Подробнее</button>
                                        </div>
                                    </div>
                                    <Modal show={showModalHouse8} onClose={handleModalHouse8Close}>
                                        <House5/>
                                    </Modal>
                                </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <button className="show-button" onClick={toggleDropdown}>
                    {
                        isOpen ? "Скрыть" : "Показать больше"
                    }
                </button>
            </div>
        </div>
    );
}

export default Portfolio;