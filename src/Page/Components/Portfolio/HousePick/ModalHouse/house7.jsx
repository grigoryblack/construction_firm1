import  { useState } from 'react';
import "./modalHouse.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const House7 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House7/img2787_39155_1170.jpeg',
            altText: 'Первая картинка',
        },
        {
            id: 2,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House7/img2787_39156_1170.jpeg',
            altText: 'Вторая картинка',
        },
        {
            id: 3,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House7/img2787_39158_1170p.jpeg',
            altText: 'Третья картинка',
        },
        {
            id: 4,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House7/img2787_39159_orig_w_700_h_700_m_0.jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 5,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House7/img2787_39160_orig_w_700_h_700_m_0.jpg',
            altText: 'Пятая картинка',
        },
    ];

    const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
    };

    const handleNextClick = () => {
        setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
    };

    return (
        <div className="house-content-wrapper">
            <div className="carousel">
                <button onClick={handlePrevClick} className="carousel_button-last"><KeyboardArrowLeftIcon/></button>
                <div className="carousel__item">
                    <img src={items[activeIndex].imageSrc} alt={items[activeIndex].altText} className="modal-house-img" />
                </div>
                <button onClick={handleNextClick} className="carousel_button-next"><KeyboardArrowRightIcon/></button>
            </div>
            <div className="title-house-modal">
                Проект дома 5
            </div>
            <div className="subtitle-house-modal">
                <p>
                    Стоимость: <span> от 4 440 000 руб.</span><br/>
                    Общая площадь:<span> 148.23 кв.м</span> <br/>
                    Размеры: <span> 10,3х8,97</span>  <br/>
                    Количество этажей: <span> 2</span>  <br/>
                    Спальни: <span> 4</span>  <br/>
                    Количество жилых комнат: <span> 5</span>  <br/>
                    Материал стен: <span> твинблок  <br/>(возможно строительство из другого материала)</span>
                    <br/><br/>
                    Проектировщик: <span>Артемий</span>
                </p>
            </div>
        </div>
    );
};

export default House7;


