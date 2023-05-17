import {useState} from 'react';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";

function House4() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            imageSrc: 'src/Page/Components/OurProject/House4/stroy-garant-hotyanovka1.jpg',
            altText: 'Первая картинка',
        },
        {
            id: 4,
            imageSrc: 'src/Page/Components/OurProject/House4/P6160511.jpg',
            altText: 'Четвертая картинка',
        },
        {
            id: 5,
            imageSrc: 'src/Page/Components/OurProject/House4/P6160513.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 6,
            imageSrc: 'src/Page/Components/OurProject/House4/P7030536.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 7,
            imageSrc: 'src/Page/Components/OurProject/House4/P7030537.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 8,
            imageSrc: 'src/Page/Components/OurProject/House4/P7080579.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 9,
            imageSrc: 'src/Page/Components/OurProject/House4/P7140630.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 11,
            imageSrc: 'src/Page/Components/OurProject/House4/P7140634.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 12,
            imageSrc: 'src/Page/Components/OurProject/House4/P8030738.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 13,
            imageSrc: 'src/Page/Components/OurProject/House4/P8130783.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 14,
            imageSrc: 'src/Page/Components/OurProject/House4/plan1cover2.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 15,
            imageSrc: 'src/Page/Components/OurProject/House4/plan2cover3.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 16,
            imageSrc: 'src/Page/Components/OurProject/House4/plan3.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 17,
            imageSrc: 'src/Page/Components/OurProject/House4/stroy-garant-hotyanovka2.jpg',
            width: "500px",
            altText: 'Пятая картинка',
        },
        {
            id: 18,
            imageSrc: 'src/Page/Components/OurProject/House4/stroy-garant-hotyanovka4.jpg',
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
                Общая площадь:	<span>240 кв.м</span> <br/>
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

export default House4;