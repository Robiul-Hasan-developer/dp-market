import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/HomeOneData/HomeOneData';
import ProfileFeaturedItem from './items/ProfileFeaturedItem';
import StarRating from '../common/StarRating';
import BadgeList from './BadgeList';
import Button from '../common/Button';
import SocialList from './../common/SocialList';

const ProfileSidebar = () => {

    const location = useLocation(); 
    
    
    return (
        <div className="profile-sidebar">
            <div className="profile-sidebar__item">
                <h5 className="mb-4">Featured Items</h5>
                {
                    products.slice(0, 1).map((featuredItem, featuredItemIndex) => {
                        return (
                            <ProfileFeaturedItem featuredItem={featuredItem} key={featuredItemIndex}/>
                        )
                    })
                }

                <div className="profile-sidebar__author">
                    <div className="author-details p-0 border-0 mt-0">
                        <div className="d-flex align-items-center gap-2">
                            <div className="author-details__thumb flex-shrink-0">
                                <img src={location.state.authorThumb} alt=""/>
                            </div>
                            <div className="author-details__content">
                                <h6 className="author-details__name font-18 mb-2">{location.state.author}</h6>
                
                                <span className="d-flex align-items-center gap-1">

                                    <StarRating starItemClass=""/>

                                    <span className="star-rating__text text-body"> 5.0</span>
                                </span>
                            </div>
                        </div>

                        <BadgeList badgeListClass="flx-align gap-2 mt-3"/>

                        <Button
                            btnLink="/products" 
                            btnClass=" btn-outline-light w-100 pill mt-32 fw-600" 
                            btnText="Total 89 Items" 
                        />

                    </div>
                </div>
                
            </div>
            <div className="profile-sidebar__item">
                <h5 className="profile-sidebar__title">Email to Support</h5>
                <form action="#">
                    <div className="row gy-4">
                        <div className="col-12">
                            <label htmlFor="emailsId" className="form-label mb-2 font-18 fw-500">Email</label>
                            <input type="email" className="common-input radius-8 common-input--md" id="emailsId" placeholder="dpmarket@gmail.com"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="messagesId" className="form-label mb-2 font-18 fw-500">Message</label>
                            <textarea className="common-input radius-8" id="messagesId" placeholder="Write Message"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-main btn-md w-100">Send</button>
                        </div>
                    </div>
                </form>
            </div>  
            <div className="profile-sidebar__item">
                <h5 className="profile-sidebar__title">Social Profile</h5>

                <SocialList ulClass="" linkClass="social-list__link flx-center bg-white border-white text-heading font-18"/>
                
            </div>  
        </div>   
    );
};

export default ProfileSidebar;