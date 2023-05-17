import './mainPage.css';
import Header from "./Components/Header/index.jsx";
import About from "./Components/AboutUs/index.jsx";
import Portfolio from "./Components/Portfolio/index.jsx";
import Contact from "./Components/Contact/index.jsx";
import ButtonToTop from "./buttonToTop.jsx";
import OurProject from "./Components/OurProject/index.jsx";

function MainPage() {
    return (
        <>
            <div id="Home">
                <Header/>
            </div>
            <div className="wrapper" id="About">
                <About/>
            </div>
            <div id="Portfolio">
            <Portfolio/>
            </div>
            <div id="Contact">
                <Contact/>
            </div>
            <div id="OurProject">
                <OurProject/>
            </div>
            <ButtonToTop/>
        </>
    );
}

export default MainPage;