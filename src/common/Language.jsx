import React, { useState } from 'react';

import globeIcon from '../../public/assets/images/icons/globe.svg';
import globeIconWhite from '../../public/assets/images/icons/globe-white.svg';

const Language = () => {

    const [language, setLanguage] = useState('Eng');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);  
    }
    
    return (
        <div className="language-select flx-align select-has-icon">
            <img src={globeIcon} alt="" className="globe-icon white-version"/>
            <img src={globeIconWhite} alt="" className="globe-icon dark-version"/>
            <select className="select py-0 ps-2 border-0 fw-500" onChange={()=>handleLanguageChange(event)}>
                <option defaultValue="Eng">Eng</option>
                <option defaultValue="Bn">Bn</option>
                <option defaultValue="Eur">Eur</option>
                <option defaultValue="Urd">Urd</option>
            </select>
        </div>
    );
};

export default Language;