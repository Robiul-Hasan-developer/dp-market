import React, { useEffect, useState } from 'react';

import sunIcon from '../../public/assets/images/icons/sun.svg';
import moonIcon from '../../public/assets/images/icons/moon.svg';

const LightDarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );
    
    useEffect(() => {
        // Save dark mode preference to localStorage
        localStorage.setItem("darkMode", isDarkMode);
        // add attribute to body
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
    }, [isDarkMode]);

    const handleDarkModeBtn = () => {
        setIsDarkMode(!isDarkMode); 
    }

    return (
        <button type='button' className="slider text-black header-right__button" onClick={handleDarkModeBtn}>
            {
                isDarkMode ? (
                    <img src={sunIcon} alt="Light Theme"/>
                ) : (
                    <img src={moonIcon} alt="Dark Theme"/>
                )
            }
        </button>
    );
};

export default LightDarkMode;