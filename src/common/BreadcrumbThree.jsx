import React, { useState } from 'react';
import BreadcrumbGradient from '../../public/assets/images/gradients/breadcrumb-gradient-bg.png';
import BreadcrumbList from './BreadcrumbList';
import { Link, useLocation } from 'react-router-dom';

import CartIcon from '../../public/assets/images/icons/cart-icon.svg';
import CartIconWhite from '../../public/assets/images/icons/cart-white.svg';

import CheckIcon from '../../public/assets/images/icons/check-icon.svg';
import CheckIconWhite from '../../public/assets/images/icons/check-icon-white.svg';
import ShareIcon from '../../public/assets/images/icons/share-icon.svg';
import StarRating from './StarRating';


const BreadcrumbThree = () => {

    const location = useLocation(); 

    // Show Social Share 
    const [showSocialShare, setShowSocialShare] = useState(false);

    const handleShowSocialShare = () => {
        setShowSocialShare(!showSocialShare)
    }
 
    /* Remove Dropdown menu when click on body ** First Way ** Start */
    document.addEventListener('click', (event) => {
        if (
            event.target.closest('.social-share__button') === null && 
            event.target.closest('.social-share__icons') === null  
        ) {
            setShowSocialShare(false)
        }
    }); 
    /* Remove Dropdown menu when click on body ** First Way ** End */
    
    return (
        <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
            <div className="breadcrumb-two">
                <img src={BreadcrumbGradient} alt="" className="bg--gradient"/>
                <div className="container container-two">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="breadcrumb-two-content">
                                <div className="text-start d-flex justify-content-start">
                                    <BreadcrumbList 
                                        pageName="Blog"
                                        renderSubLink={true}
                                        SubLinkText="products"
                                        SubLinkPath="/products"
                                    />
                                </div>
                
                                <h3 className="breadcrumb-two-content__title mb-3 text-capitalize"> {location.state.title} </h3>
            
                                <div className="breadcrumb-content flx-align gap-3">
                                    <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                                        <span className="text">By <Link to="/profile" className="link text-main fw-600"> {location.state.author}</Link> 
                                        </span>
                                    </div>
                                    <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                                        <span className="icon">
                                            <img src={CartIcon} alt="" className="white-version"/>
                                            <img src={CartIconWhite} alt="" className="dark-version w-20"/>
                                        </span>
                                        <span className="text">{location.state.randomSales} sales</span>
                                    </div>
                                    <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                                        <span className="icon">
                                            <img src={CheckIcon} alt="" className="white-version"/>
                                            <img src={CheckIconWhite} alt="" className="dark-version"/>
                                        </span>
                                        <span className="text">Recently Updated</span>
                                    </div>
                                    <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                                        <span className="icon">
                                            <img src={CheckIcon} alt="" className="white-version"/>
                                            <img src={CheckIconWhite} alt="" className="dark-version"/>
                                        </span>
                                        <span className="text">Well Documented</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container-two">
                <div className="breadcrumb-tab flx-wrap align-items-start gap-lg-4 gap-2">
                    <ul className="nav tab-bordered nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-product-details-tab" data-bs-toggle="pill" data-bs-target="#pills-product-details" type="button" role="tab" aria-controls="pills-product-details" aria-selected="true">Product Details</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-rating-tab" data-bs-toggle="pill" data-bs-target="#pills-rating" type="button" role="tab" aria-controls="pills-rating" aria-selected="false">
                            <span className="d-flex align-items-center gap-1">
                                <StarRating/>
                                <span className="star-rating__text text-body"> 5.0</span>
                                <span className="star-rating__text text-body"> ({location.state.randomRatingText})</span>
                            </span>
                        </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-comments-tab" data-bs-toggle="pill" data-bs-target="#pills-comments" type="button" role="tab" aria-controls="pills-comments" aria-selected="false">Comments (50)</button>
                        </li>
                    </ul>
                    <div className="social-share">
                        <button type="button" className="social-share__button" onClick={()=>handleShowSocialShare()}>
                            <img src={ShareIcon} alt=""/>
                        </button>
                        <div className={`social-share__icons ${showSocialShare ? "show" : ""}`}>
                            <ul className="social-list colorful-style">
                                <li className="social-list__item">
                                    <a href="https://www.facebook.com" className="social-list__link text-body flex-center"><i className="fab fa-facebook-f"></i></a> 
                                </li>
                                <li className="social-list__item">
                                    <a href="https://www.twitter.com" className="social-list__link text-body flex-center"> <i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li className="social-list__item">
                                    <a href="https://www.google.com" className="social-list__link text-body flex-center"> <i className="fab fa-twitter"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default BreadcrumbThree;