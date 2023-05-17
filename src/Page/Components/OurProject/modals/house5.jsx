import React, {useState} from 'react';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";

function House5() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            imageSrc: 'src/Page/Components/OurProject/House5/1.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 2,
            imageSrc: 'src/Page/Components/OurProject/House5/2.jpg',
            altText: 'Вторая картинка',
        },
        {
            id: 3,
            imageSrc: 'src/Page/Components/OurProject/House5/3.jpg',
            altText: 'Третья картинка',
        },
        {
            id: 4,
            imageSrc: 'src/Page/Components/OurProject/House5/4 (1).jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 5,
            imageSrc: 'src/Page/Components/OurProject/House5/5.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 6,
            imageSrc: 'src/Page/Components/OurProject/House5/6.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 7,
            imageSrc: 'src/Page/Components/OurProject/House5/7.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 8,
            imageSrc: 'src/Page/Components/OurProject/House5/8.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 9,
            imageSrc: 'src/Page/Components/OurProject/House5/1 (1).jpg',
            altText: 'Вторая картинка',
        },
        {
            id: 10,
            imageSrc: 'src/Page/Components/OurProject/House5/2 (1).jpg',
            altText: 'Третья картинка',
        },
        {
            id: 11,
            imageSrc: 'src/Page/Components/OurProject/House5/3 (1).jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 12,
            imageSrc: 'src/Page/Components/OurProject/House5/4.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 13,
            imageSrc: 'src/Page/Components/OurProject/House5/5 (1).jpg',
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
                Общая площадь:	<span>104 кв.м</span> <br/>
            </div>
            <div className="subtitle-house-modal">
                <p>
                    Проектировщик: <span> Артемий </span> <br/>
                    Прораб: <span> Александр </span> <br/>
                    Бригадир: <span> Батыр </span> <br/>
                </p>
            </div>
        </div>
    );
}

export default House5;