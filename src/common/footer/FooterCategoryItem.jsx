import React from 'react';
import { Link } from 'react-router-dom';
import { footerCategoryLinks } from '../../data/CommonData/CommonData';

const FooterCategoryItem = () => {
    return (
        <>
            <div className="footer-item">
                <h5 className="footer-item__title">Categoreis</h5>
                <ul className="footer-menu">
                    {
                        footerCategoryLinks.map((footerCategoryLink, footerCategoryLinkIndex) => {
                            return (
                                <li className="footer-menu__item" key={footerCategoryLinkIndex}>
                                    <Link to={footerCategoryLink.link} className="footer-menu__link">{footerCategoryLink.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default FooterCategoryItem;