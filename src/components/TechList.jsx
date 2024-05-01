import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { techLists } from '../data/HomeOneData/HomeOneData';

const TechList = () => {

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }, []);

    return (
        <div className="tech-list">
            {
                techLists.map((techList, techListIndex) => {
                    return (
                        <Link to={techList.path} className="tech-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={techList.dataTitle} key={techListIndex}>
                            <img src={techList.icon} alt="" className="white-version"/>
                            {
                                techList.iconWhite && (
                                    <img src={techList.iconWhite} alt="" className="dark-version"/>
                                )
                            }
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default TechList;