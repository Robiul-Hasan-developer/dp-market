import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../../common/StarRating';
import { getRandomNumber, slugURL } from '../../utility/Utility';

const ProfileFeaturedItem = ({ featuredItem }) => {

    const {title, thumb, author, price, prevPrice, authorThumb } = featuredItem; 
    
    const {randomSales, randomRatingText} = getRandomNumber(); 

    const productURL = slugURL({url: 'products', slug: title}); 
    
    return (
        <div className="featured-item d-flex align-items-center gap-4">
            <div className="featured-item__thumb">
                <Link to={productURL} state={{ thumb, title, author, randomSales, randomRatingText, price }} className="link">
                    <img src={thumb} alt=""/>
                </Link>
            </div>
            <div className="featured-item__content">
                <h6 className="featured-item__title mb-2">
                    <Link to={productURL} state={{ thumb, title, author, randomSales, randomRatingText, price }} className="link">{title}</Link>
                    </h6>
                <span className="featured-item__text mb-2 text-heading fw-500">{randomSales} Purchases</span>
                <div className="d-flex align-items-center gap-1">

                    <StarRating starItemClass=""/>
                    
                    <span className="star-rating__text text-body font-14"> 5.0 </span>
                    <span className="star-rating__text text-body font-14"> ({randomRatingText})</span>
                </div>
            </div>
        </div>   
    );
};

export default ProfileFeaturedItem;