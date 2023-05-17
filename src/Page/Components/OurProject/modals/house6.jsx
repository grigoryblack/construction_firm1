import React, {useState} from 'react';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";

function House6() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            imageSrc: 'src/Page/Components/OurProject/House6/1.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 2,
            imageSrc: 'src/Page/Components/OurProject/House6/2.jpg',
            altText: 'Вторая картинка',
        },
        {
            id: 3,
            imageSrc: 'src/Page/Components/OurProject/House6/3.jpg',
            altText: 'Третья картинка',
        },
        {
            id: 4,
            imageSrc: 'src/Page/Components/OurProject/House6/4.jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 5,
            imageSrc: 'src/Page/Components/OurProject/House6/5.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 6,
            imageSrc: 'src/Page/Components/OurProject/House6/6.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 7,
            imageSrc: 'src/Page/Components/OurProject/House6/7.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 8,
            imageSrc: 'src/Page/Components/OurProject/House6/8.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 9,
            imageSrc: 'src/Page/Components/OurProject/House6/9.jpg',
            altText: 'Вторая картинка',
        },
        {
            id: 10,
            imageSrc: 'src/Page/Components/OurProject/House6/10.jpg',
            altText: 'Третья картинка',
        },
        {
            id: 11,
            imageSrc: 'src/Page/Components/OurProject/House6/11.jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 12,
            imageSrc: 'src/Page/Components/OurProject/House6/12.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 13,
            imageSrc: 'src/Page/Components/OurProject/House6/13.jpg',
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
                Общая площадь:	<span>156 кв.м</span> <br/>
            </div>
            <div className="subtitle-house-modal">
                <p>
                    Проектировщик: <span> Александра </span> <br/>
                    Прораб: <span> Василий </span> <br/>
                    Бригадир: <span> Батыр </span>
                </p>
            </div>
        </div>
    );
}

export default House6;