import React, { useState } from 'react';
import ProductItem from './items/ProductItem';
import { products } from '../data/HomeOneData/HomeOneData';
import SectionHeading from '../common/SectionHeading';
import CircleText from '../common/CircleText';
import Button from '../common/Button';
import AuthorInfo from './AuthorInfo';
import authorThumb from '../../public/assets/images/thumbs/author-img.png';
import { Link } from 'react-router-dom';

const FeaturedAuthor = () => {

const author = 'Amplify'; 
    const [follow, setFollow] = useState(false);

    const handleFollowClick = () => {
        setFollow(!follow)
    }    

    return (
        <section className="top-author padding-y-120 section-bg position-relative z-index-1">
            <img src="assets/images/gradients/featured-gradient.png" alt="" className="bg--gradient white-version"/>
            <img src="assets/images/shapes/spider-net.png" alt="" className="spider-net position-absolute top-0 start-0 z-index--1 white-version"/>
            <img src="assets/images/shapes/spider-net-white2.png" alt="" className="spider-net position-absolute top-0 start-0 z-index--1 dark-version"/>
            <img src="assets/images/shapes/pattern-curve-three.png" alt="" className="position-absolute top-0 end-0 z-index--1"/>

            <img src="assets/images/shapes/element1.png" alt="" className="element two"/>
            
            <div className="container container-two">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-5">
                        <div className="section-content">

                            <SectionHeading
                                headingClass="style-left" 
                                title="Top Featured Author" 
                                renderDesc={true} 
                                descClass=" font-18 w-sm"
                                desc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."
                                renderButton={false} 
                                buttonText="View All Items"
                            />
                            
                            <AuthorInfo/>
                            
                            <div className="flx-align gap-2 mt-48">

                                <Link to="/profile" state={{ authorThumb, author }} className="btn btn-main btn-lg pill fw-300">
                                    View Profile
                                </Link>

                                <button type="button" className={`follow-btn btn btn-outline-light btn-lg pill ${follow ? 'active' : ''}`} onClick={handleFollowClick}>
                                    {
                                        follow ? "Following" : 'Follow'
                                    }
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="circle-content position-relative">

                           <CircleText circleClass="" rotateText="DPmarketer Top Featured Author"/>

                            <div className="row gy-4 card-wrapper">
                                {
                                    products.slice(0, 4).map((productItem, productIndex) => {
                                        return (
                                            <ProductItem 
                                                colClasses="col-sm-6" 
                                                cardClasses=""
                                                renderWishlist={true}
                                                renderDownloadButton={false}
                                                key={productIndex}
                                                productItem={productItem}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedAuthor;