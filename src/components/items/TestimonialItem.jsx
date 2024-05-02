import React from 'react';
import StarRating from '../../common/StarRating';

const TestimonialItem = ({testimonialItem}) => {

    const {desc, clientImage, clientName, clientDesignation} = testimonialItem; 
    
    return (
        <div className="testimonial-item hover-bg-main">
            <img src="assets/images/gradients/testimonial-bg.png" alt="" className="hover-bg white-version"/>
            <img src="assets/images/gradients/testimonial-bg.png" alt="" className="hover-bg dark-version"/>
            <div className="testimonial-item__rating mb-3 d-flex justify-content-start">
                <StarRating starItemClass=""/>
            </div>
            <p className="testimonial-item__desc">{desc}</p>
            <div className="testimonial-item__quote">
                <img src="assets/images/icons/quote.svg" alt="" className="quote quote-white"/>
                <img src="assets/images/icons/quote-dark.svg" alt="" className="quote quote-dark"/>
            </div>
            <div className="client-info d-flex align-items-center gap-3">
                <div className="client-info__thumb">
                    <img src={clientImage} alt=""/>
                </div>
                <div className="client-info__content">
                    <h5 className="client-info__name mb-2">{clientName}</h5>
                    <span className="client-info__designation text-heading fw-500">{clientDesignation}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;