import  { useState } from 'react';
import "./modalHouse.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const House1 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House1/razdel-AR_Page6_Image1.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 2,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House1/razdel-AR_Page7_Image1.jpg',
            altText: 'Вторая картинка',
        },
        {
            id: 3,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House1/razdel-AR_Page8_Image1.jpg',
            altText: 'Третья картинка',
        },
        {
            id: 4,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House1/razdel-AR_Page9_Image1.jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 5,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House1/plan.png',
            width: "500px",
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
                Проект дома 1
            </div>
            <div className="subtitle-house-modal">
                <p>
                    Стоимость: <span> от 1 700 000 руб.</span><br/>
                    Общая площадь:	<span>57,5 кв.м</span> <br/>
                    Размеры: <span>9,34х8,98</span>  <br/>
                    Количество этажей: <span>1</span>  <br/>
                    Спальни: <span>2</span>  <br/>
                    Количество жилых комнат: <span>3</span>  <br/>
                    Материал стен: <span> кирпич (возможно строительство из другого материала)</span>
                    <br/><br/>
                    Проектировщик: <span>Владислав</span>
                </p>
            </div>
        </div>
    );
};

export default House1;


