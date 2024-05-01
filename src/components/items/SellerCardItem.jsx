import React from 'react';
import { Link } from 'react-router-dom';

const SellerCardItem = (props) => {
    return (
        <div className={`seller-item position-relative z-index-1 ${props.cardClass}`}>
            <img src={props.cardThumb} className="position-absolute start-0 top-0 z-index--1" alt=""/>
            <h3 className="seller-item__title">{props.cardTitle}</h3>
            <p className="seller-item__desc fw-500 text-heading">{props.cardDesc}</p>
            <Link to={props.cardBtnLink} className="btn btn-static-outline-black btn-xl pill fw-600">{props.cardBtnText}</Link>
        </div>
    );
};

export default SellerCardItem;