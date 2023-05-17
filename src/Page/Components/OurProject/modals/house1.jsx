import React, {useState} from 'react';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";

function House1() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            imageSrc: 'src/Page/Components/OurProject/house1/viz01.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 2,
            imageSrc: 'src/Page/Components/OurProject/house1/viz02.jpg',
            altText: 'Вторая картинка',
        },
        {
            id: 3,
            imageSrc: 'src/Page/Components/OurProject/house1/viz03.jpg',
            altText: 'Третья картинка',
        },
        {
            id: 4,
            imageSrc: 'src/Page/Components/OurProject/house1/viz04.jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 5,
            imageSrc: 'src/Page/Components/OurProject/house1/viz05.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 6,
            imageSrc: 'src/Page/Components/OurProject/house1/viz06.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 7,
            imageSrc: 'src/Page/Components/OurProject/house1/viz07.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 8,
            imageSrc: 'src/Page/Components/OurProject/house1/viz08.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 9,
            imageSrc: 'src/Page/Components/OurProject/house1/wplan1.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 10,
            imageSrc: 'src/Page/Components/OurProject/house1/wplan2.jpg',
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
                Общая площадь:	<span>135 кв.м</span> <br/>
            </div>
            <div className="subtitle-house-modal">
                <p>
                    Проектировщик: <span> Карина </span> <br/>
                    Прораб: <span> Александр </span> <br/>
                    Бригадир: <span> Сергей </span>
                </p>
            </div>
        </div>
    );
}

export default House1;