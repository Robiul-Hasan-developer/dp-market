import React from 'react';
import StarRating from './StarRating';
import { getRandomNumber, randomMonth, randomYear } from '../utility/Utility';
import { useLocation } from 'react-router-dom';
import BadgeList from '../components/BadgeList';
import { profileTabLists } from '../data/OthersPageData/OthersPageData';

const BreadcrumbFive = () => {

    const location = useLocation(); 

    const { randomRatingText, formattedRandomThousandValue} = getRandomNumber(); 

    const getRandomMonth = randomMonth(); 
    const getRandomYear = randomYear(); 
    
    return (
        <section className="breadcrumb-three section-bg position-relative z-index-1 overflow-hidden">

            <img src="assets/images/gradients/breadcrumb-gradient-bg.png" alt="" className="bg--gradient"/>
        
            <img src="assets/images/shapes/element-moon3.png" alt="" className="element one"/>
            <img src="assets/images/shapes/element-moon1.png" alt="" className="element three"/>
            
            <div className="container container-two">
                <div className="breadcrumb-three-content border-bottom border-color">
                    <div className="breadcrumb-three-content__inner">
                        <div className="breadcrumb-three-content__left">
                            <div className="flx-between align-items-end gap-3">
                                <div className="author-profile d-flex gap-2 flex-column">
                                    <div className="author-profile__thumb flex-shrink-0">
                                        <img src={location.state.authorThumb} alt=""/>
                                    </div>
                                    <div className="author-profile__info">
                                        <h5 className="author-profile__name mb-2">{location.state.author}</h5>
                                        <span className="author-profile__membership font-14">Member Since {getRandomMonth} {getRandomYear}</span>
                                    </div>
                                </div>
                                <div className="breadcrumb-three-content__right flex-shrink-0  d-flex align-items-center gap-4 gap-lg-5">
                                    <div className="author-rating">
                                        <span className="author-rating__text text-heading fw-500 mb-2">Author Rating</span>
                                        <div className="d-flex align-items-center gap-1">

                                            <StarRating/>
                                            
                                            <span className="star-rating__text text-body font-14"> ({randomRatingText} ratings)</span>
                                        </div>
                                    </div>
                                    <div className="sales">
                                        <span className="sales__text mb-1 text-heading fw-500">Sales</span>
                                        <h5 className="sales__amount mb-0">{formattedRandomThousandValue} </h5>
                                    </div>
                                </div>
                            </div>
                            
                            <BadgeList badgeListClass=" mt-32 flx-align gap-2 ms-0" />

                        </div>
                    </div>

                    <ul className="nav tab-bordered nav-pills mt-4" id="pills-tabbs" role="tablist">
                        {
                            profileTabLists.map((profileTabListItem, profileTabListItemIndex) => {

                                const convertToSlug = (text) => {
                                    return text.toLowerCase().replace(/\s+/g, '-');
                                }
                                const formattedConvertToSlug = convertToSlug(profileTabListItem.text); 

                                const isActive = profileTabListItemIndex === 0;
                                
                                return (
                                    <li className="nav-item" role="presentation" key={profileTabListItemIndex}>
                                        <button
                                            className={`nav-link ${isActive ? 'active' : ''}`}
                                            id={`pills-${formattedConvertToSlug}-tab`}
                                            data-bs-toggle="pill"
                                            data-bs-target={`#pills-${formattedConvertToSlug}`}
                                            type="button"
                                            role="tab"
                                            aria-controls={`pills-${formattedConvertToSlug}`}
                                            aria-selected={isActive ? 'true' : 'false'} >

                                            {profileTabListItem.text}
                                        {
                                            profileTabListItem.notification && (
                                                <span className="notification">{profileTabListItem.notification}</span>
                                            )
                                        }
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default BreadcrumbFive;