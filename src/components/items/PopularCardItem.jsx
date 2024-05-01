import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../../common/StarRating';
import { getRandomNumber, slugURL } from '../../utility/Utility';

const PopularCardItem = ({ productItem }) => {

    const {title, thumb, author, price} = productItem; 
    
    // Product Details Slug
    const PopularItemURL = slugURL({url: 'products', slug: title})

    // Random Sales & Rating 
    const {randomRatingText, randomSales} = getRandomNumber(); 

    
    return (
        <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
            <div className="popular-item-card">
                <div className="popular-item-card__thumb">
                    <Link to={PopularItemURL}  state={{ thumb, title, author, randomSales, randomRatingText, price }} className="link w-100"> 
                        <img src={productItem.thumb} alt=""/>
                    </Link>

                    <div className="product-card__bottom flx-between gap-2">
                        <div>
                            <span className="product-card__sales font-14 mb-0 text-white">{randomSales} Sales</span>
                            <div className="d-flex align-items-center gap-1">
                                <StarRating/>
                                <span className="star-rating__text text-white fw-500 font-14"> ({ randomRatingText })</span>
                            </div>
                        </div>
                        <span className="product-card__author">
                            by <Link to="/profile" className="link text-decoration-underline"> 
                                {productItem.author}
                            </Link>
                        </span>
                    </div>
                    
                </div>
                <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                        <Link to={PopularItemURL}  state={{ thumb, title, author, randomSales, randomRatingText, price }} className="link"> {productItem.title}</Link>
                    </h6>
                    <Link to={PopularItemURL}  state={{ thumb, title, author, randomSales, randomRatingText, price }} className="btn-link line-height-1 flex-shrink-0">
                        <img src="assets/images/icons/link.svg" alt="" className="white-version"/>
                        <img src="assets/images/icons/link-light.svg" alt="" className="dark-version"/>
                    </Link>
                </div>
            </div>
        </div>    
    );
};

export default PopularCardItem;