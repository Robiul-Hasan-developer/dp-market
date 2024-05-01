import React, { useEffect } from 'react';
import { badgeLists } from '../data/OthersPageData/OthersPageData';

const BadgeList = (props) => {

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }, []);
    
    return (
        <ul className={`badge-list ${props.badgeListClass}`}>
            {
                badgeLists.map((badgeList, badgeListIndex) => {
                    return (
                        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={badgeList.dataTitle} key={badgeListIndex}>
                            <img src={badgeList.image} alt=""/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default BadgeList;