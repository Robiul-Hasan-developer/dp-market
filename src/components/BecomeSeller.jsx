import React from 'react';
import { Link } from 'react-router-dom';
import SellerCardItem from './items/SellerCardItem';
import SupportContent from './SupportContent';

const BecomeSeller = () => {
    return (
        <section className="seller padding-y-120">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <SellerCardItem
                            cardClass=''
                            cardThumb='assets/images/shapes/seller-bg.png'
                            cardTitle='Earn 75% of the ItemD Price'
                            cardDesc='Sellers receive 75% of the Item Price for items solid exclusively and 50% for items sold non-exclusively. See detailed informationabout the fee structure on Market.'
                            cardBtnLink='/register'
                            cardBtnText='Become a Seller'
                        />                        
                    </div>
                    <div className="col-lg-6">
                        <SellerCardItem
                            cardClass='bg-two'
                            cardThumb='assets/images/shapes/seller-bg-two.png'
                            cardTitle='Earn until 40% commission'
                            cardDesc='Our Market is the world’s largest creative market place, selling millions of digital assets every year. With 30% affiliate commission, earning money has never been easier!'
                            cardBtnLink='/register'
                            cardBtnText='Become an Affiliate'
                        />                        
                    </div>

                    <div className="col-lg-12">
                        <div className="support position-relative z-index-1">
                            <img src="assets/images/shapes/spider-net-sm.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1"/>
                            <img src="assets/images/shapes/arrow-shape.png" alt="" className="arrow-shape"/>
                            <div className="row align-items-center">
                                <div className="col-lg-1 d-lg-block d-none"></div>
                                <div className="col-lg-3 col-md-4 d-md-block d-none">
                                    <div className="support-thumb text-center">
                                        <img src="assets/images/thumbs/support-img.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-lg-block d-none"></div>
                                <div className="col-lg-5 col-md-8">
                                    <SupportContent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeSeller;