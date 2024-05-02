import React from 'react';
import Pagination from '../../common/Pagination';
import { Link } from 'react-router-dom';
import StarRating from '../../common/StarRating';
import { reviewProducts } from '../../data/OthersPageData/OthersPageData';
import { getCurrentFormattedDate, getCurrentTime, getRandomNumber, slugURL } from '../../utility/Utility';

const ReviewCardTable = () => {

    const currentDate = getCurrentFormattedDate(); 
    const currentTime = getCurrentTime(); 

    // Random Sales & Rating 
    const {randomRatingText, randomSales} = getRandomNumber(); 
    
    return (
        <div className="card common-card border border-gray-five">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table text-body mt--24">
                        <thead>
                            <tr>
                                <th>Product | Date</th>
                                <th>User</th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviewProducts.map((reviewProductItem, reviewProductItemIndex) => {
                                    const {thumb, title, userName, desc, author, price} = reviewProductItem; 

                                    // Product Details Slug
                                    const productURL = slugURL({url: 'products', slug: title}); 
                                    
                                    return (
                                        <tr key={reviewProductItemIndex}>
                                            <td>
                                                <div className="review-product d-flex align-items-center gap-2">
                                                    <div className="review-product__thumb flex-shrink-0">
                                                        <img src={thumb} alt=""/>
                                                    </div>
                                                    <div className="review-product__content">
                                                        <h6 className="review-product__name font-15 fw-500 mb-0">
                                                            <Link to={productURL} state={{ thumb, title, author, price, randomRatingText, randomSales }}  className="link">{title} </Link>
                                                        </h6>
                                                        <span className="review-product__date font-12">{currentDate}  {currentTime}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> 
                                                <div className="product-user font-12">
                                                    <strong className="fw-600 text-heading d-block">{userName}</strong>
                                                    <span>{desc}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <StarRating/>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to={productURL} className="btn btn-main" state={{ thumb, title, author, price, randomRatingText, randomSales }} >
                                                    <i className="fa fa-reply"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="flx-between gap-2">
                        <div className="paginate-content flx-align flex-nowrap gap-3">
                            <select className="select common-input py-2 px-3 w-auto">
                                <option defaultValue="1">1</option>
                                <option defaultValue="2">2</option>
                                <option defaultValue="3">3</option>
                                <option defaultValue="4">4</option>
                                <option defaultValue="5">5</option>
                                <option defaultValue="6">6</option>
                                <option defaultValue="7">7</option>
                                <option defaultValue="8">8</option>
                                <option defaultValue="9">9</option>
                                <option defaultValue="10">10</option>
                            </select>
                            <span className="paginate-content__text fs-14">Showing 1 - 10 of 100</span>
                        </div>

                        <Pagination/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCardTable;