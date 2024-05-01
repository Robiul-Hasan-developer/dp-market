import React from 'react';
import { Link } from 'react-router-dom';

const PopularItem = ({ popularCategory }) => {
    return (
        <Link to={popularCategory.path} className="popular-item w-100">
            <span className="popular-item__icon">
                <img src={popularCategory.icon} alt=""/>
            </span>
            <h6 className="popular-item__title font-18">{popularCategory.title}</h6>
            <span className="popular-item__qty text-body">{popularCategory.qty}</span>
        </Link>
    );
};

export default PopularItem;
