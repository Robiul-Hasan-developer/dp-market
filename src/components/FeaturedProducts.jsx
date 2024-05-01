import React from 'react';
import ProductItem from './items/ProductItem';
import { products } from '../data/HomeOneData/HomeOneData';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const FeaturedProducts = () => {
    return (
        <section className="featured-product padding-y-120 position-relative z-index-1">
            <img src="assets/images/gradients/featured-gradient.png" alt="" className="bg--gradient white-version"/>
            <img src="assets/images/shapes/spider-net.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 white-version"/>
            <img src="assets/images/shapes/spider-net-white.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 dark-version"/>

            <img src="assets/images/shapes/element1.png" alt="" className="element two"/>
            
            <div className="container container-two">
                <div className="row gy-4 flex-wrap-reverse align-items-center">
                    <div className="col-xl-6">
                        <div className="row gy-4 card-wrapper">
                            {
                                products.slice(0, 4).map((productItem, productIndex) => {
                                    return (
                                        <ProductItem 
                                            colClasses="col-sm-6" 
                                            cardClasses="box-shadow"
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
                    <div className="col-xl-1 d-xl-block d-none"></div>
                    <div className="col-xl-5">
                        <div className="section-content">

                            <SectionHeading
                                headingClass="style-left" 
                                title="Featured Products" 
                                renderDesc={true} 
                                descClass=" font-18 w-sm"
                                desc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."
                                renderButton={false} 
                            />
                            <Button 
                                btnLink="/products" 
                                btnClass="btn-main btn-lg pill fw-300" 
                                btnText="View All Items" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;