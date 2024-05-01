import React from 'react';
import Comment from './BlogDetailsComponent/Comment';
import { Link, useLocation } from 'react-router-dom';
import ProductDetailsContent from './ProductDetailsContent';
import StarRating from '../common/StarRating';
import ProductSidebar from './ProductSidebar';

const ProductDetailsSection = () => {

    const location = useLocation(); 
    
    return (
        <div className="product-details mt-32 padding-b-120">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-product-details" role="tabpanel" aria-labelledby="pills-product-details-tab" tabIndex="0">
                                {/* Product Details Content Start */}
                                <ProductDetailsContent/>
                                {/* Product Details Content End */}
                            </div>
                            <div className="tab-pane fade" id="pills-rating" role="tabpanel" aria-labelledby="pills-rating-tab" tabIndex="0">
                                <div className="product-review-wrapper">
                                    <div className="product-review">
                                        <div className="product-review__top flx-between">
                                            <div className="product-review__rating flx-align">
                                                <div className="d-flex align-items-center gap-1">
                                                    <StarRating/>
                                                    <span className="star-rating__text text-body"> 5.0</span>
                                                </div>
                                                <span className="product-review__reason">For <span className="product-review__subject">Customer Support</span> </span>
                                            </div>
                                            <div className="product-review__date">
                                                by <Link to="#" className="product-review__user text--base">John Doe </Link> 2 month ago
                                            </div>
                                        </div>
                                        <div className="product-review__body">
                                            <p className="product-review__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam itaque vitae ex possimus delectus? Voluptas expedita accusantium aperiam quo quod dolore dignissimos rerum praesentium deserunt libero recusandae quisquam est accusamus eos dolorum sit explicabo, sapiente pariatur voluptates veniam aut veritatis, magnam velit similique! Ex similique magni labore aperiam, eius quas molestiae accusantium porro eaque esse minus amet doloribus quo odit illo doloremque.</p>
                                        </div>
                                    </div>
                                    <div className="product-review">
                                        <div className="product-review__top flx-between">
                                            <div className="product-review__rating flx-align">
                                                <div className="d-flex align-items-center gap-1">
                                                    <StarRating/>
                                                    <span className="star-rating__text text-body"> 5.0</span>
                                                </div>
                                                <span className="product-review__reason">For <span className="product-review__subject">Customer Support</span> </span>
                                            </div>
                                            <div className="product-review__date">
                                                by <Link to="#" className="product-review__user text--base">John Doe </Link> 2 month ago
                                            </div>
                                        </div>
                                        <div className="product-review__body">
                                            <p className="product-review__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam itaque vitae ex possimus delectus? Voluptas expedita accusantium aperiam quo quod dolore dignissimos rerum praesentium deserunt libero recusandae quisquam est accusamus eos dolorum sit explicabo, sapiente pariatur voluptates veniam aut veritatis, magnam velit similique! Ex similique magni labore aperiam, eius quas molestiae accusantium porro eaque esse minus amet doloribus quo odit illo doloremque.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-comments" role="tabpanel" aria-labelledby="pills-comments-tab" tabIndex="0">
                                
                                {/* Comment Start */}
                                <Comment/>
                                {/* Comment End */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <ProductSidebar/>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSection;