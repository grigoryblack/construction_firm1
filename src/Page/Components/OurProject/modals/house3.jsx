import React, {useState} from 'react';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";

function House3() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            imageSrc: 'src/Page/Components/OurProject/House3/DSC01325-1800x1200.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 2,
            imageSrc: 'src/Page/Components/OurProject/House3/DSC00550-1800x1200.jpg',
            altText: 'Вторая картинка',
        },
        {
            id: 4,
            imageSrc: 'src/Page/Components/OurProject/House3/DSC01227-1800x1350.jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 5,
            imageSrc: 'src/Page/Components/OurProject/House3/DSC01242-1800x1350.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 6,
            imageSrc: 'src/Page/Components/OurProject/House3/DSC01324-1800x1350.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 7,
            imageSrc: 'src/Page/Components/OurProject/House3/IMG_0700-08-12-18-07-21.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 8,
            imageSrc: 'src/Page/Components/OurProject/House3/IMG_1324-08-12-18-09-18-1800x1350.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 9,
            imageSrc: 'src/Page/Components/OurProject/House3/rozetki-2-j-etazh.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 11,
            imageSrc: 'src/Page/Components/OurProject/House3/vyklyuch-1-j-etazh.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 12,
            imageSrc: 'src/Page/Components/OurProject/House3/vyklyuch-2-j-etazh.jpg',
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
                Общая площадь:	<span>350 кв.м</span> <br/>
            </div>
            <div className="subtitle-house-modal">
                <p>
                    Проектировщик: <span> Александр </span> <br/>
                    Прораб: <span> Антон </span> <br/>
                    Бригадир: <span> Денис </span>
                </p>
            </div>
        </div>
    );
}

export default House3;