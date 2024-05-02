import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BadgeList from '../BadgeList';
import { getRandomNumber, randomMonth, randomYear } from '../../utility/Utility';
import StarRating from '../../common/StarRating';

const FollowersItem = ({ followersListItem, followingTab, followersTab }) => {

    const {authorThumb, author} = followersListItem; 

    const {randomRatingText, randomSales, formattedRandomThousandValue} = getRandomNumber(); 

    const randomMonths = randomMonth(); 
    const randomYears = randomYear(); 

    // Following Text
    const [follow, setFollow] = useState(false);

    const handleFollow = () => {
        setFollow(!follow); 
    }

    return (
        <div className="follow-item">
            <div className="follow-item__author">
                <div className="d-flex align-items-start gap-2">
                    <div className="author-details__thumb flex-shrink-0">
                        <img src={authorThumb} alt=""/>
                    </div>
                    <div className="author-details__content">
                        <h6 className="author-details__name font-18 mb-2">
                            <Link to="/profile" state={{ author, authorThumb}} >{author}</Link>
                        </h6>

                        <BadgeList badgeListClass="badge-list--sm flx-align gap-1 mt-3 ms-0"/>

                    </div>
                </div>
            </div>
            <div className="follow-item__meta">
                <strong className="font-11 fw-600 text-heading">
                    {randomRatingText} Items
                    <br/>
                    {randomSales} Followers
                    <br/>
                    Member Since: {randomMonths} {randomYears}
                    <br/>
                    Available for freelance work
                </strong>
            </div>
            <div className="follow-item__sales">
                <div className="sales">
                    <span className="sales__text mb-1 font-13 text-heading fw-500">Sales</span>
                    <h6 className="sales__amount mb-0 font-body">{formattedRandomThousandValue}</h6>

                    <StarRating starItemClass=""/>
                    
                    <span className="star-rating__text text-heading font-12 fw-500"> {randomRatingText} ratings</span>
                </div>
            </div>
            <button type="button" className="btn btn-main pill px-4" onClick={()=>handleFollow()}>
                {
                    followingTab && (
                         follow ? (
                            <>
                                Following
                            </>
                        ) : (
                            <>
                                Follow
                            </>
                        )
                    )
                }

                {
                    followersTab && (
                            follow ? (
                                <>
                                    Follow
                                </>
                            ) : (
                                <>
                                    Unfollow
                                </>
                            )
                    )
                }
            </button>
        </div>
    );
};

export default FollowersItem;