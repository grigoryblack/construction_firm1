import './OurProject.css';
import {AnimatePresence, motion} from "framer-motion";
import Modal from "../modalWindow/index.jsx";
import House1 from "./modals/house1.jsx";
import House2 from "./modals/house2.jsx";
import House3 from "./modals/house3.jsx";
import House4 from "./modals/house4.jsx";
import House5 from "./modals/house5.jsx";
import House6 from "./modals/house6.jsx";
import House7 from "./modals/house7.jsx";
import House8 from "./modals/house8.jsx";
import {useState} from "react";
function OurProject() {

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

    /*Модалка 1 дома*/
    const [showModalHousePortfolio1, setShowModalHousePortfolio1] = useState(false);
    const handleModalHouse1Open = () => {
        setShowModalHousePortfolio1(true);
    };

    const handleModalHouse1Close = () => {
        setShowModalHousePortfolio1(false);
    };

    /*Модалка 2 дома*/
    const [showModalHousePortfolio2, setShowModalHousePortfolio2] = useState(false);
    const handleModalHouse2Open = () => {
        setShowModalHousePortfolio2(true);
    };

    const handleModalHouse2Close = () => {
        setShowModalHousePortfolio2(false);
    };


    /*Модалка 3 дома*/
    const [showModalHousePortfolio3, setShowModalHousePortfolio3] = useState(false);
    const handleModalHouse3Open = () => {
        setShowModalHousePortfolio3(true);
    };

    const handleModalHouse3Close = () => {
        setShowModalHousePortfolio3(false);
    };

    /*Модалка 4 дома*/
    const [showModalHousePortfolio4, setShowModalHousePortfolio4] = useState(false);
    const handleModalHouse4Open = () => {
        setShowModalHousePortfolio4(true);
    };

    const handleModalHouse4Close = () => {
        setShowModalHousePortfolio4(false);
    };

    /*Модалка 5 дома*/
    const [showModalHousePortfolio5, setShowModalHousePortfolio5] = useState(false);
    const handleModalHouse5Open = () => {
        setShowModalHousePortfolio5(true);
    };

    const handleModalHouse5Close = () => {
        setShowModalHousePortfolio5(false);
    };

    /*Модалка 6 дома*/
    const [showModalHousePortfolio6, setShowModalHousePortfolio6] = useState(false);
    const handleModalHouse6Open = () => {
        setShowModalHousePortfolio6(true);
    };

    const handleModalHouse6Close = () => {
        setShowModalHousePortfolio6(false);
    };

    /*Модалка 7 дома*/
    const [showModalHousePortfolio7, setShowModalHousePortfolio7] = useState(false);
    const handleModalHouse7Open = () => {
        setShowModalHousePortfolio7(true);
    };

    const handleModalHouse7Close = () => {
        setShowModalHousePortfolio7(false);
    };

    /*Модалка 8 дома*/
    const [showModalHousePortfolio8, setShowModalHousePortfolio8] = useState(false);
    const handleModalHouse8Open = () => {
        setShowModalHousePortfolio8(true);
    };

    const handleModalHouse8Close = () => {
        setShowModalHousePortfolio8(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="our-project">
            <div className="portfolio">
                <div className="portfolio-wrapper">
                    <div className="our-project-title">Наши работы</div>
                    <motion.div className="portfolio-container-1"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{once:true}}>
                        <motion.div custom={1} variants={blockAnimationPortfolio} className="portfolio-item-1">
                            <img src='src/Page/Components/OurProject/house1/viz01.jpg' alt="pic1" className="portfolio-pick"/>
                            <div className="title-item">
                                <div className="portfolio-title-1"> Дом в 20 км от Челябинска<br/> Площадь 135 кв.м</div>
                                <button className="portfolio-button" onClick={handleModalHouse1Open}>Подробнее</button>
                            </div>
                        </motion.div>
                        <Modal show={showModalHousePortfolio1} onClose={handleModalHouse1Close}>
                            <House1/>
                        </Modal>
                        <motion.div custom={2} variants={blockAnimationPortfolio} className="portfolio-item-1">
                            <img src='src/Page/Components/OurProject/house2/20151007_164152-transformed.jpg' alt="pic2" className="portfolio-pick"/>
                            <div className="title-item">
                                <div className="portfolio-title-1"> Дом около Березовского <br/>Площадь 75 кв.м</div>
                                <button className="portfolio-button" onClick={handleModalHouse2Open}>Подробнее</button>
                            </div>
                        </motion.div>
                        <Modal show={showModalHousePortfolio2} onClose={handleModalHouse2Close}>
                            <House2/>
                        </Modal>
                        <motion.div custom={3} variants={blockAnimationPortfolio} className="portfolio-item-1">
                            <img src='src/Page/Components/OurProject/House3/DSC01325-1800x1200.jpg' alt="pic3" className="portfolio-pick"/>
                            <div className="title-item">
                                <div className="portfolio-title-1"> Дом в 15 км от <br/>Екатеринбурга <br/>Площадь 350 кв.м</div>
                                <button className="portfolio-button" onClick={handleModalHouse3Open}>Подробнее</button>
                            </div>
                        </motion.div>
                        <Modal show={showModalHousePortfolio3} onClose={handleModalHouse3Close}>
                            <House3/>
                        </Modal>
                    </motion.div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div initial={{height: 0, opacity: 0}}
                                        animate={{height: 'auto', opacity: 1}}>
                                <div className="portfolio-container-1">
                                    <div className="portfolio-item-1">
                                        <img src='src/Page/Components/OurProject/House4/stroy-garant-hotyanovka1.jpg' alt="pic1" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Дом на окраине <br/> Нижний Тагил <br/>Площадь 240 кв.м</div>
                                            <button className="portfolio-button" onClick={handleModalHouse4Open}>Подробнее</button>
                                        </div>
                                    </div>
                                    <Modal show={showModalHousePortfolio4} onClose={handleModalHouse4Close}>
                                        <House4/>
                                    </Modal>
                                    <div  className="portfolio-item-1">
                                        <img src='src/Page/Components/OurProject/House5/1.jpg' alt="pic2" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Дом около Верхней Пышмы <br/>Площадь 104 кв.м</div>
                                            <button className="portfolio-button" onClick={handleModalHouse5Open}>Подробнее</button>
                                        </div>
                                    </div>
                                    <Modal show={showModalHousePortfolio5} onClose={handleModalHouse5Close}>
                                        <House5/>
                                    </Modal>
                                    <div  className="portfolio-item-1">
                                        <img src='src/Page/Components/OurProject/House6/1.jpg' alt="pic3" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Дом в 8 км <br/>от Шишкино <br/>Площадь 156 кв.м</div>
                                            <button className="portfolio-button" onClick={handleModalHouse6Open}>Подробнее</button>
                                        </div>
                                    </div>
                                    <Modal show={showModalHousePortfolio6} onClose={handleModalHouse6Close}>
                                        <House6/>
                                    </Modal>
                                </div>
                                <div className="portfolio-container-2">
                                    <div  className="portfolio-item-2">
                                        <img src='src/Page/Components/OurProject/House7/1.jpg' alt="pic4" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Дом около Козловского <br/>Площадь 120 кв.м</div>
                                            <button className="portfolio-button" onClick={handleModalHouse7Open}>Подробнее</button>
                                        </div>
                                    </div>
                                    <Modal show={showModalHousePortfolio7} onClose={handleModalHouse7Close}>
                                        <House7/>
                                    </Modal>
                                    <div className="portfolio-item-2">
                                        <img src='src/Page/Components/OurProject/House8/7.jpg' alt="pic5" className="portfolio-pick"/>
                                        <div className="title-item">
                                            <div className="portfolio-title-1"> Дом в 20 км <br/> от Березовского <br/>Площадь 125 кв.м</div>
                                            <button className="portfolio-button" onClick={handleModalHouse8Open}>Подробнее</button>
                                        </div>
                                    </div>
                                    <Modal show={showModalHousePortfolio8} onClose={handleModalHouse8Close}>
                                        <House8/>
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
            <div className="footer">
                СК «ОЛИМП» © 2023 г. Все права защищены.
            </div>
        </div>
    );
}

export default OurProject;