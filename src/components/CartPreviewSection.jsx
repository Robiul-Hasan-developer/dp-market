import React from 'react';
import { Link } from 'react-router-dom';
import { orderDetailsLists, productInfoLists } from '../data/OthersPageData/OthersPageData';
import envelopeImage from '../../public/assets/images/thumbs/thank-evenelope.png';

const CartPreviewSection = () => {
    return (
        <section className="cart-thank section-bg padding-y-120 position-relative z-index-1 overflow-hidden">

            <img src="assets/images/gradients/thank-you-gradient.png" alt="" className="bg--gradient"/>

            <div className="container container-two">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <div className="cart-thank__content text-center">
                            <h2 className="cart-thank__title mb-48">Thank you for purchased this products!!</h2>
                            <div className="cart-thank__img">
                                <img src={envelopeImage} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="padding-t-120">
                    <div className="cart-thank__box">
                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <div className="thank-card">
                                    <h5 className="thank-card__title mb-3">Order Details</h5>
                                    <ul className="list-text">
                                        <li className="list-text__item flx-align flex-nowrap">
                                            <span className="text text-heading fw-500 font-heading fw-700 font-18">Order No.</span>
                                            <span className="text text-heading fw-500">#658907</span>
                                        </li>
                                        {
                                            orderDetailsLists.map((orderDetailsList, orderDetailsListIndex) => {
                                                return (
                                                    <li className="list-text__item flx-align flex-nowrap" key={orderDetailsListIndex}>
                                                        <span className="text text-heading fw-500">{orderDetailsList.text}</span>
                                                        <span className="text">${orderDetailsList.amount}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="thank-card">
                                    <h5 className="thank-card__title mb-3">Products you have purchased</h5>
                                    <ul className="list-text">
                                        <li className="list-text__item flx-align flex-nowrap">
                                            <span className="text text-heading fw-500 font-heading fw-700 font-18">Name</span>
                                            <span className="text text-heading fw-500">Price</span>
                                        </li>
                                        {
                                            productInfoLists.map((productInfoListItem, productInfoListItemIndex) => {
                                                return (
                                                    <li className="list-text__item flx-align flex-nowrap" key={productInfoListItemIndex}>
                                                        <span className="text text-heading fw-500">{productInfoListItem.text}</span>
                                                        <span className="text">${productInfoListItem.amount}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                        
                                    </ul>
                                    <div className="thank-card__thumb mt-64 mb-3">
                                        <img src="assets/images/thumbs/rating-img.png" alt=""/>
                                    </div>
                                    <div className="flx-between gap-2">
                                        <p className="text">Please don’t forget to rating</p>
                                        <Link to="/" className="btn btn-main flx-align gap-2 pill"> 
                                            Back To Home
                                            <span className="icon line-height-1 font-20"><i className="las la-arrow-right"></i></span> 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    );
};

export default CartPreviewSection;