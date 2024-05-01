import React from 'react';
import ProfileSidebar from '../ProfileSidebar';
import { profileContents, profileFollowers } from '../../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';

const ProfileContent = () => {
    return (
        <div className="profile-wrapper">
            <div className="profile-content">
                <div className="profile-content__inner">
                    <div className="profile-content__thumb mb-lg-5 mb-4">
                        <img src="assets/images/thumbs/profile-img.png" alt=""/>
                    </div>
                    <div className="profile-content__item-wrapper">
                        {
                            profileContents.map((profileContentItem, profileContentItemIndex) => {
                                return (
                                    <div className="profile-content__item" key={profileContentItemIndex}>
                                        <h5 className="profile-content__title mb-2">{profileContentItem.title}</h5>
                                        <p className="profile-content__desc">{profileContentItem.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="follower-item">
                        <div className="flx-between mb-4">
                            <h5 className="follower-item__title mb-0">1285 Followers</h5>
                            <Link to="/profile" className="text-body fw-500 hover-text-decoration-underline">View All Followers</Link>
                        </div>
                        <div className="follower-item__content flx-align">
                            {
                                profileFollowers.map((profileFollowerItem, profileFollowerItemIndex) => {
                                    return (
                                        <div className="follower-item__item" key={profileFollowerItemIndex}>
                                            <Link to="/products" className="link w-100 h-100 d-block">
                                                <img src={profileFollowerItem.img} alt=""/>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <ProfileSidebar/>
            
        </div>
    );
};

export default ProfileContent;