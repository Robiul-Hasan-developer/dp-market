import React from 'react';
import { footerQuickLinks } from '../../data/CommonData/CommonData';
import { Link } from 'react-router-dom';

const FooterServiceItem = () => {
    return (
        <>
            <div className="footer-item">
                <h6 className="footer-item__title">Services</h6>
                <ul className="footer-menu">
                    {
                        footerQuickLinks.map((footerQuickLink, index) => {
                            return (
                                <li className="footer-menu__item" key={index}>
                                    <Link to={footerQuickLink.link} className="footer-menu__link">{footerQuickLink.text} </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>   
        </>
    );
};

export default FooterServiceItem;