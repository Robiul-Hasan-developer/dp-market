import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { metaAttributes, sidebarLists } from '../data/OthersPageData/OthersPageData';

import cartIcon from '../../public/assets/images/icons/add-to-cart.svg';
import StarRating from '../common/StarRating';
import BadgeList from './BadgeList';

const ProductSidebar = () => {

    const location = useLocation(); 
    const { state: { price, author, authorThumb } = {} } = location;

    const [openLicense, setOpenLicense] = useState(false);

    const handleOpenLicense = () => {
        setOpenLicense(!openLicense); 
    }
    
    /* Remove Dropdown menu when click on body ** First Way ** Start */
    document.addEventListener('click', (event) => {
        if (
            event.target.closest('.btn-has-dropdown') === null && 
            event.target.closest('.license-dropdown') === null  
        ) {
            setOpenLicense(false)
        }
    }); 
    /* Remove Dropdown menu when click on body ** First Way ** End */
    
    return (
        <div className="product-sidebar section-bg">
            <div className="product-sidebar__top position-relative flx-between gap-1">
                <button type="button" className="btn-has-dropdown font-heading font-18" onClick={handleOpenLicense}>
                    Extended License
                </button>

                <div className={`license-dropdown ${openLicense ? 'active' : ''}`}>
                    <div className="license-dropdown__item mb-3">
                        <h6 className="license-dropdown__title font-body mb-1 font-16">Regular License</h6>
                        <p className="license-dropdown__desc font-13">Use, by you or one client, in a solitary finished result which end clients are not charged for. The complete cost incorporates the thing cost and a purchaser expense..</p>
                    </div>
                    <div className="license-dropdown__item">
                        <h6 className="license-dropdown__title font-body mb-1 font-16">Extended License</h6>
                        <p className="license-dropdown__desc font-13">Use, by you or one client, in a solitary final result which end clients can be charged for. The all out cost incorporates the thing cost and a purchaser expense.</p>
                    </div>
                    <div className="mt-3 pt-2 border-top text-center ">
                        <a href="#" className="link hover-text-decoration-underline font-14 text-main fw-500">View License Details</a>
                    </div>
                </div>

                <h6 className="product-sidebar__title">${price}.00</h6>
            </div>
            <ul className="sidebar-list">
                {
                    sidebarLists.map((sidebarList, sidebarListIndex) => {
                        return (
                            <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2" key={sidebarListIndex}>
                                <span className="icon"><img src={sidebarList.icon} alt=""/></span>
                                <span className="text">{sidebarList.text}</span>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="flx-between mt-3">
                <div className="common-check mb-0">
                    <input className="form-check-input" type="checkbox" name="checkbox" id="extended"/>
                    <label className="form-check-label mb-0 fw-300 text-body" htmlFor="extended">Extended support 12 month</label>
                </div>
                <div className="flx-align gap-2">
                    <span className="product-card__prevPrice text-decoration-line-through">$12</span>
                    <h6 className="product-card__price mb-0 font-14 fw-500">$7.25</h6>
                </div>
            </div>
            <button type="button" className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32"> 
                <img src={cartIcon} alt=""/>
                Add To Cart
            </button>

            {/* Author Details Start*/}
            <div className="author-details">
                <div className="d-flex align-items-center gap-2">
                    <div className="author-details__thumb flex-shrink-0">
                        <img src={authorThumb} alt=""/>
                    </div>
                    <div className="author-details__content">
                        <h6 className="author-details__name font-18 mb-2">
                            <Link to="/profile" state={{ authorThumb, author }} className="link hover-text-main">{author}</Link>
                        </h6>

                        <span className="d-flex align-items-center gap-1">
                            <StarRating starItemClass=""/>
                            <span className="star-rating__text text-body"> 5.0</span>
                        </span>
                    </div>
                </div>

                <BadgeList badgeListClass="flx-align gap-2 mt-3"/>

                <Link to="/profile" state={{ authorThumb, author }} className='btn btn-outline-light w-100 pill mt-32'>View Portfolio</Link>

            </div>
            {/* Author Details End */}

            {/* Meta Attribute List Start */}
            <ul className="meta-attribute">
                {
                    metaAttributes.map((metaAttribute, metaAttributeIndex) => {
                        return (
                            <li className="meta-attribute__item" key={metaAttributeIndex}>
                                <span className="name">{metaAttribute.name}</span>
                                {
                                    metaAttribute.details && (
                                        <span className="details">{metaAttribute.details}</span>
                                    )
                                }

                                {
                                    metaAttribute.detailsList && (
                                        <span className="details">
                                            {
                                                metaAttribute.detailsList.map((detailsListItem, detailsListItemIndex) => {
                                                return (
                                                        <Link to="#" className="hover-text-decoration-underline" key={detailsListItemIndex}>
                                                            {detailsListItem.text}
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </span>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
            {/* Meta Attribute List End */}
        </div>
    );
};

export default ProductSidebar;