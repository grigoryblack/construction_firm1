import "./contact.css"
import InputMask from "react-input-mask";
import {useState} from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { motion } from 'framer-motion';

const blockAnimationContact = {
    hidden:{
        y:-100,
        opacity: 0,
    },
    visible: custom => ({
        animation: "move 5s",
        y:0,
        opacity: 1,
        transition: { delay: custom * 0.3 },
    }),
}

const blockAnimationContactForm = {
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

function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const handleMainSubmit = (event) => {
        event.preventDefault();

        // send survey data to server
        const surveyMainData = {
            name,
            phone,
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
    };

    const phoneNumberCompany="+7-(912)-620-79-39"


    return (
        <motion.div
            viewport={{once:true}}
            initial="hidden"
            whileInView="visible" className="contact-wrapper">
            <div className="contact-container">
                <div className="title-contact">Контакты</div>
                <div className="form-contact">
                     <motion.form custom={1} variants={blockAnimationContact}  className="form-style-contact" onSubmit={handleMainSubmit}>
                            <div className="title-form-contact"> Заявка на консультацию </div>
                            <div className="subtitle-form-contact">Оставьте заявку на бесплатную консультацию и в течении 10 минут с Вами свяжется наш специалист и ответит на все интересующие вопросы </div>
                            <motion.div custom={1} variants={blockAnimationContactForm} className="form-input-contact">
                                <label htmlFor="input-field1" className="label-form-contact">
                                    Введите ФИО:
                                </label>
                                <input
                                    type="text"
                                    id="input-field1"
                                    name="input-field"
                                    value={name}
                                    onChange={handleChangeName}
                                    className="input-form-contact"
                                />
                                <br/>
                                <label htmlFor="input-field2" className="label-form-contact">
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
                                               className="input-form-contact"
                                        />
                                    )}
                                </InputMask>
                            </motion.div>
                            <button className="send-button-contact" type="submit" disabled={name === '' || phone === '' || phone.includes('_')}>Отправить</button>
                         <div className="title-form-contact"> Свяжитесь с нами!</div>
                            <motion.div custom={2} variants={blockAnimationContactForm} className="contact">
                                <div className="contact-p"> Телефон: <a href={`tel:${phoneNumberCompany}`} className="phone-contact">{phoneNumberCompany}</a></div>
                                <div className="contact-p"> Почта: <a href="mailto:sk.olimp.ekb@gmail.com?subject=Вопрос&body=Здравствуйте." className="phone-contact">sk.olimp.ekb@gmail.com</a></div>
                            </motion.div>
                            <motion.div custom={3} variants={blockAnimationContactForm} className="social-media-container">
                                <a href="#" className="social-item"> <InstagramIcon sx={{fontSize:"50px"}}/></a>
                                <a href="#" className="social-item"> <TelegramIcon sx={{fontSize:"50px"}}/></a>
                                <a href="https://vk.com/ckolimp66" className="social-item"> <img src="src/utils/icons8-vk.svg" alt="https://icons8.com/" style={{height:"55px", width:"55px"}}/></a>
                            </motion.div>
                        </motion.form>
                        <motion.div custom={2} variants={blockAnimationContact}  className="mockup-pic">
                        </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;