import  { useState } from 'react';
import "./modalHouse.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const House8 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House8/img137_33957_1170p.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 2,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House8/img137_33958_1170p.jpg',
            altText: 'Вторая картинка',
        },
        {
            id: 3,
            imageSrc: 'src/Page/Components/portfolio/HousePick/House8/img137_40715_orig_w_700_h_700_m_0.jpg',
            altText: 'Третья картинка',
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
                Проект дома 6
            </div>
            <div className="subtitle-house-modal">
                <p>
                    Стоимость: <span> от 3 300 000 руб.</span><br/>
                    Общая площадь:<span> 110.90 кв.м</span> <br/>
                    Размеры: <span> 10,56х14,28</span>  <br/>
                    Количество этажей: <span> 1</span>  <br/>
                    Спальни: <span> 3</span>  <br/>
                    Количество жилых комнат: <span> 4</span>  <br/>
                    Материал стен: <span> твинблок  <br/>(возможно строительство из другого материала)</span>
                    <br/><br/>
                    Проектировщик: <span>Артемий</span>
                </p>
            </div>
        </div>
    );
};

export default House8;


