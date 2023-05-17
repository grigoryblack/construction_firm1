import "./header.css"
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import {useState} from 'react';
import Modal from '../modalWindow/index';
import InputMask from 'react-input-mask';
import {questions, options} from "../modalWindow/calculation.js";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';


const blockAnimationHeader = {
    hidden:{
        x:-100,
        opacity: 0,
    },
    visible: custom => ({
        animation: "move 5s",
        x:0,
        opacity: 1,
        transition: { delay: custom * 0.3 },
    }),
}
function Header() {
    const phoneNumberCompany="+7-(912)-620-79-39"

    /*Переменные для пользователя*/

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };


    /*Модальное окно 1*/

    const [showModal, setShowModal] = useState(false);
    const [showModalCalculate, setShowModalCalculate] = useState(false);
    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalCalculateOpen= () => {
        setShowModalCalculate(true);
    };

    const handleModalCalculateClose = () => {
        setShowModalCalculate(false);
    };

    /*Модальное окно 2*/
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [nameCalculation, setNameCalculation] = useState('');
    const [phoneCalculation, setPhoneCalculation] = useState('');
    const [emailCalculation, setEmailCalculation] = useState('');
    const handleEmailChange = (event) => {
        setEmailCalculation(event.target.value);
    };

    const handleAnswerChange = (event) => {
        setAnswers({
            ...answers,
            [currentQuestion]: event.target.value,
        });
    };

    const handleNameChange = (event) => {
        setNameCalculation(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhoneCalculation(event.target.value);
    };

    const handlePrevClick = () => {
        setCurrentQuestion(currentQuestion - 1);
    };

    const handleNextClick = () => {
        const currentAnswer = answers[currentQuestion];
        if (currentAnswer !== undefined) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    /*2 модальное окно*/
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const handleSubmit = (event) => {
        event.preventDefault();

        // send survey data to server
        const surveyDataCalculation = {
            houseArea: answers[0],
            floor: answers[1],
            numberRooms: answers[2],
            landAvailability: answers[3],
            houseCompletion: answers[4],
            nameCalculation,
            phoneCalculation,
            emailCalculation
        };

        fetch(`${backendUrl}/constructionCost`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "post",
                body: JSON.stringify(surveyDataCalculation)
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log('ОК')
                }
            })


        console.log(surveyDataCalculation);

        // reset survey state
        setCurrentQuestion(0);
        setAnswers({});
        setNameCalculation('');
        setPhoneCalculation('');
        setEmailCalculation('');

        handleModalCalculateClose()
    };

    /*Первое модальное окно */

    const handleMainSubmit = (event) => {
        event.preventDefault();

        // send survey data to server
        const surveyMainData = {
            name,
            phone,
            email,
        };

        fetch(`${backendUrl}/feedBack`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "post",
                body: JSON.stringify(surveyMainData)
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log('ОК')
                }
            })

        console.log(surveyMainData);

        // reset survey state
        setName('');
        setPhone('');
        setEmail('');

        handleModalClose()
    };


    const ProgressBar = () => {
        const style = {
            width: '100%',
            height: '3px',
            position: 'relative',
        };
        const fillStyle = {
            backgroundColor: '#333333',
            height: '100%',
            width: `${progress}%`,
            position: 'absolute',
            top: 0,
            left: 0,
        };
        return (
            <div style={style}>
                <div style={fillStyle}></div>
            </div>
        );
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    const [isOn, setIsOn] = useState(false);

    const [isOnCalculation, setIsOnCalculation] = useState(false);


    const handleToggle = () => {
        setIsOn(!isOn);
    };

    const handleToggleCalculation = () => {
        setIsOnCalculation(!isOnCalculation);
    };

    const [showPortfolio, setShowPortfolio] = useState(false);

    const togglePortfolio = () => {
        setShowPortfolio(!showPortfolio);
    };

    return (
      <>
          <motion.div
              viewport={{once:true}}
              initial="hidden"
              whileInView="visible"
              className="header-container">
              <div className="header-container-tune">
                  <div className="header-nav">
                      <div className="logo"></div>
                      <div className="info-title-container">
                          <div className="phone-number">
                              <a className="phone" href={`tel:${phoneNumberCompany}`}>{phoneNumberCompany}</a>
                              <div className="phone-title">Остались вопросы? <br/> Закажи консультацию!</div>
                          </div>
                          <button className="price-button" onClick={handleModalOpen}> Консультация <PhoneEnabledIcon/> </button>
                      </div>
                  </div>
                  <div className="nav">
                      <ul className="menu">
                          <a href="#Home"><li className="menu-item">Главная</li></a>
                          <a href="#About"><li className="menu-item">О нас</li></a>
                          <li className="menu-ite-dropdown" onClick={togglePortfolio}>
                              Портфолио {showPortfolio ? <img className="arrow-nav" src="src/utils/Vector.svg" alt="вверх"/> : <img className="arrow-nav" src="src/utils/Vector-1.svg" alt="вниз"/>}
                              {showPortfolio && (
                                  <ul className="submenu">
                                      <a href="#Portfolio"><li className="submenu-item">Популярные проекты</li></a>
                                      <a href="#OurProject"><li className="submenu-item">Наши работы</li></a>
                                  </ul>
                              )}
                          </li>
                          <a href="#Contact"><li className="menu-item">Контакты</li></a>
                      </ul>
                  </div>
                  <div className="header-title-container">
                      <motion.div custom={1} variants={blockAnimationHeader}  className="header-title">Построим<br/>
                          дом Вашей мечты <br/>
                          <span style={{fontWeight:700}}>от 30 000₽/м² за 75 дней</span>
                      </motion.div>
                      <motion.div custom={2} variants={blockAnimationHeader}  className="header-subtitle">
                          СК «ОЛИМП» - гарантия вашего спокойствия
                      </motion.div >
                      <motion.button custom={3} variants={blockAnimationHeader}  className="calculation" onClick={handleModalCalculateOpen}> Рассчитать стоимость строительства </motion.button>
                  </div>
                  <Modal show={showModalCalculate} onClose={handleModalCalculateClose}>
                      <div className="form-calculation">
                          <div className="title-consultation"> Рассчитайте стоимость дома </div>
                          <ProgressBar progress={progress} />
                          <div className="subtitle-consultation"> Вопрос {currentQuestion + 1}/5 </div>
                          <div>{questions[currentQuestion]}</div>
                          <form>
                              {options[currentQuestion].map((option, index) => (
                                  <div key={index}>
                                          {typeof option === "string" ? (
                                              <label className="select-input">
                                                  <input
                                                      className="radio-custom"
                                                      type="radio"
                                                      id={`option-${index}`}
                                                      name={`question-${currentQuestion}`}
                                                      value={option}
                                                      checked={answers[currentQuestion] === option}
                                                      onChange={handleAnswerChange}
                                                  />
                                                  <span className="radio-dot"></span>
                                                  <div className="label-form-style">{option}</div>
                                              </label>
                                          ) : (
                                              <div className="select-input-img">
                                                  <input
                                                      className="radio-custom"
                                                      type="radio"
                                                      id={`option-${index}`}
                                                      name={`question-${currentQuestion}`}
                                                      value={option.label}
                                                      checked={answers[currentQuestion] === option.label}
                                                      onChange={handleAnswerChange}
                                                  />
                                                  <span className="radio-dot-img"></span>
                                                  <label htmlFor={`option-${index}`} className="label-img">
                                                      {/*<img style={{height}} src={option.image} alt={option.label} />*/}
                                                      <div className="label-form-style">{option.label}</div>
                                                      {/*img-title*/}
                                                  </label>
                                              </div>
                                          )}
                                  </div>
                              ))}
                          </form>
                          <div className={currentQuestion !== questions.length - 1 && "button-position"}>
                              {currentQuestion !== 0 && (
                                  <button className="back-calculation" onClick={handlePrevClick}><KeyboardArrowLeftIcon/>Назад</button>
                              )}
                              {currentQuestion !== questions.length - 1 ? (
                                  <button className="next-calculation" onClick={handleNextClick} disabled={answers[currentQuestion] === undefined}>Далее <KeyboardArrowRightIcon/></button>
                              ) : (
                                  <div>
                                      <form onSubmit={handleSubmit}>
                                          <br/>
                                          <label htmlFor="name" className="label-form">Введите Имя:</label>
                                          <input
                                              className="input-form"
                                              type="text"
                                              id="name"
                                              name="name"
                                              value={nameCalculation}
                                              onChange={handleNameChange}
                                          />
                                          <br/>

                                          {!isOnCalculation && <div><label htmlFor="phone" className="label-form">Номер телефона:</label>
                                          <InputMask
                                              mask="+7 (999) 999-99-99"
                                              onChange={handlePhoneChange}
                                              value={phoneCalculation}
                                          >
                                              {() => (
                                                  <input type="text"
                                                         id="input-field2"
                                                         className="input-form"
                                                  />
                                              )}
                                          </InputMask></div>}
                                          {isOnCalculation && <div>
                                              <label htmlFor="email" className="label-form">Введите почту:</label>
                                              <input
                                                  className="input-form"
                                                  type="text"
                                                  id="email"
                                                  name="email"
                                                  value={emailCalculation}
                                                  onChange={handleEmailChange}
                                              />
                                              {(!emailCalculation.includes('@') || emailCalculation.length<6) &&
                                                  (<div className="alarm">Пожалуйста, введите корректную почту</div>)}
                                          </div>}
                                          <br/>
                                          <label style={{width: '190px'}}>
                                              <input type="checkbox" checked={isOnCalculation} onChange={handleToggleCalculation} />
                                              Использовать почту
                                          </label>
                                          <button type="submit" className="next-calculation" disabled={answers[currentQuestion] === undefined || nameCalculation === '' || ((phoneCalculation ==='' || phoneCalculation.includes('_')) && (!emailCalculation.includes('@') || emailCalculation.length<6))}>Отправить <SendIcon sx={{marginLeft:"5px"}}/></button>
                                      </form>
                                  </div>
                              )}
                          </div>
                      </div>
                  </Modal>
                  <Modal show={showModal} onClose={handleModalClose}>
                      <div className="form">
                          <div className="img-consultation"></div>
                          <div className="title-consultation"> Заявка на консультацию </div>
                          <div className="subtitle-consultation">Оставьте заявку на бесплатную консультацию и в течении 10 минут с Вами свяжется наш специалист и ответит на все интересующие вопросы </div>
                          <form className="form-style" onSubmit={handleMainSubmit}>
                              <div className="form-input">
                              <label htmlFor="input-field1" className="label-form">
                                  Введите Имя:
                              </label>
                              <input
                                  type="text"
                                  id="input-field1"
                                  name="input-field"
                                  value={name}
                                  onChange={handleChangeName}
                                  className="input-form"
                              />
                                  <br/>
                                  { !isOn && <div><label htmlFor="input-field2" className="label-form">
                                  Введите номер телефона:
                              </label>
                                  <InputMask
                                      mask="+7 (999) 999-99-99"
                                      value={phone}
                                      onChange={handleChangePhone}
                                  >
                                      {() => (
                                          <input type="text"
                                                 id="input-field2"
                                                 className="input-form"
                                          />
                                      )}
                                  </InputMask></div>}
                                  { isOn && <div>
                                      <label htmlFor="input-field1" className="label-form">
                                          Введите почту:
                                      </label>
                                      <input
                                          type="text"
                                          id="input-field1"
                                          name="input-field"
                                          value={email}
                                          onChange={handleChangeEmail}
                                          className="input-form"
                                      />
                                      {(!email.includes('@') || email.length<6) &&
                                          (<div className="alarm">Пожалуйста, введите корректную почту</div>)}
                                  </div>}
                                  <br/>
                                  <label style={{width: '190px'}}>
                                      <input type="checkbox" checked={isOn} onChange={handleToggle} className=""/>
                                      Использовать почту
                                  </label>
                              </div>
                              <button className="send-button" type="submit" disabled={name === '' || ((phone === '' || phone.includes('_')) && (!email.includes('@') || email.length<6))}>Отправить</button>
                          </form>
                      </div>
                  </Modal>
                  </div>
         </motion.div>
      </>
    );
}

export default Header;