import React, {useState} from 'react';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";

function House8() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            imageSrc: 'src/Page/Components/OurProject/House8/1.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 2,
            imageSrc: 'src/Page/Components/OurProject/House8/2.jpg',
            altText: 'Вторая картинка',
        },
        {
            id: 3,
            imageSrc: 'src/Page/Components/OurProject/House8/3.jpg',
            altText: 'Третья картинка',
        },
        {
            id: 4,
            imageSrc: 'src/Page/Components/OurProject/House8/4.jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 5,
            imageSrc: 'src/Page/Components/OurProject/House8/5.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 6,
            imageSrc: 'src/Page/Components/OurProject/House8/6.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 7,
            imageSrc: 'src/Page/Components/OurProject/House8/7.jpg',
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
                Общая площадь:	<span>125 кв.м</span> <br/>
            </div>
            <div className="subtitle-house-modal">
                <p>
                    Проектировщик: <span> Артемий </span> <br/>
                    Прораб: <span> Александр </span ><br/>
                    Бригадир: <span> Сергей </span>
                </p>
            </div>
        </div>
    );
}

export default House8;