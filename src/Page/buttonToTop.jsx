import { useState, useEffect } from 'react';
import './mainPage.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const ButtonToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', toggleVisibility);
        return () => {
            document.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <>
            {isVisible && (
                <a href="#Home">
                    <button
                        className="button-to-top"
                        style={{ position: 'fixed', bottom: '15%', right: '5%' }}
                    >
                        <ArrowUpwardIcon sx={{fontSize:"25px"}}/>
                    </button>
                </a>
            )}
        </>
    );
};

export default ButtonToTop;