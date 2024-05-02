import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbList = (props) => {
    return (
        <ul className="breadcrumb-list flx-align gap-2 mb-2 justify-content-center">
            <li className="breadcrumb-list__item font-14 text-body">
                <Link to="/" className="breadcrumb-list__link text-body hover-text-main">Home</Link>
            </li>
            {
                props.renderSubLink && (
                    <>
                        <li className="breadcrumb-list__item font-14 text-body">
                            <span className="breadcrumb-list__icon font-10"><i className="fas fa-chevron-right"></i></span>
                        </li>
                        <li className="breadcrumb-list__item font-14 text-body">
                            <Link to={props.SubLinkPath} className="breadcrumb-list__link text-body hover-text-main">{props.SubLinkText}</Link>
                        </li>
                    </>
                )
            }
        
            <li className="breadcrumb-list__item font-14 text-body">
                <span className="breadcrumb-list__icon font-10"><i className="fas fa-chevron-right"></i></span>
            </li>
            <li className="breadcrumb-list__item font-14 text-body">
                <span className="breadcrumb-list__text">{props.pageName}</span>
            </li>
        </ul>   
    );
};

export default BreadcrumbList;