import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../../common/StarRating';
import { getRandomNumber, slugURL } from '../../utility/Utility';

const ProductItem = ({ colClasses, cardClasses, productItem, renderWishlist, renderDownloadButton }) => {

    const {title, thumb, author, price, prevPrice, authorThumb} = productItem; 
    
    // Product Details Slug
    const productURL = slugURL({url: 'products', slug: title}); 

    // Random Sales & Rating 
    const {randomRatingText, randomSales} = getRandomNumber(); 

    // Add Wishlist 
    const [wishlist, setWishlist] = useState();

    const handleWishlist = () => {
        setWishlist(!wishlist); 
    }

    return (
        <div className={`${colClasses}`}>
            <div className={`product-card ${cardClasses}`}>
                <div className="product-card__thumb d-flex">
                    <Link to={productURL} state={{ thumb, title, author, authorThumb, randomSales, randomRatingText, price }} className="link w-100">
                        <img src={thumb} alt="" className="cover-img"/> 
                    </Link>
                    {
                        renderWishlist && (
                            <button type="button" className={`product-card__wishlist ${wishlist ? 'active' : ''}`} onClick={handleWishlist}>
                                <i className="fas fa-heart"></i>
                            </button>
                        )
                    }
                </div>
                <div className="product-card__content">
                    <h6 className="product-card__title">
                        <Link to={productURL} state={{ thumb, title, author, authorThumb, randomSales, randomRatingText, price }} className="link">{title}</Link>
                    </h6>
                    <div className="product-card__info flx-between gap-2">
                        <span className="product-card__author">
                            by <Link to="/profile" state={{ author, authorThumb}} className="link hover-text-decoration-underline"> 
                                {author}
                            </Link>
                        </span>
                        <div className="flx-align gap-2">
                            <h6 className="product-card__price mb-0">${price}</h6>
                            <span className="product-card__prevPrice text-decoration-line-through">${prevPrice}</span>
                        </div>
                    </div>
                    <div className="product-card__bottom flx-between gap-2">
                        <div>
                            <span className="product-card__sales font-14 mb-2">{randomSales} Sales</span>
                            <div className="d-flex align-items-center gap-1">
                                
                                <StarRating starItemClass="font-11"/>

                                <span className="star-rating__text text-heading fw-500 font-14"> ({randomRatingText})</span>
                            </div>
                        </div>

                        <div className="flx-align gap-2">
                            {
                                renderDownloadButton && (
                                    <Link to={productURL} className="btn btn-outline-light download-icon btn-icon btn-icon--sm pill"> 
                                        <span className="icon">
                                            <img src="assets/images/icons/download.svg" alt="" className="white-version"/>
                                            <img src="assets/images/icons/download-white.svg" alt="" className="dark-version"/>
                                        </span>
                                    </Link>
                                )
                            }
                            <Link to={productURL} state={{ thumb, title, author, authorThumb, randomSales, randomRatingText, price }} className="btn btn-outline-light btn-sm pill">Live Demo</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;