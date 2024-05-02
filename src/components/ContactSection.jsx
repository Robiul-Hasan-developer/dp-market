import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { contactInfoLists } from '../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';
import SocialList from '../common/SocialList';
import ContactUsForm from './ContactUsForm';

const ContactSection = () => {
    return (
        <section className="contact padding-t-120 padding-b-60 section-bg position-relative z-index-1 overflow-hidden">
            <img src="assets/images/gradients/banner-two-gradient.png" alt="" className="bg--gradient"/>
            <img src="assets/images/shapes/pattern-five.png" className="position-absolute end-0 top-0 z-index--1" alt=""/>

            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-5">
                        <div className="contact-info">

                            <SectionHeading
                                headingClass="style-left mb-0" 
                                title="Get in touch with us today" 
                                renderDesc={true} 
                                descClass=" font-18 w-sm"
                                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum rem facere labore cupiditate sint? Animi quis illo suscipit autem cum."
                                renderButton={false} 
                                buttonText="View All Items"
                            />

                            <div className="contact-info__item-wrapper flx-between gap-4">
                                {
                                    contactInfoLists.map((contactInfoListItem, contactInfoListItemIndex) => {
                                        return (
                                            <div className="contact-info__item" key={contactInfoListItemIndex}>
                                                <span className="contact-info__text text-capitalize d-block mb-1">{contactInfoListItem.text}</span>
                                                <Link to={`${contactInfoListItem.linkTo}${contactInfoListItem.link}`} className="contact-info__link font-24 fw-500 text-heading hover-text-main">{contactInfoListItem.link}</Link>
                                            </div>
                                        )
                                    })
                                } 
                            </div>

                            <div className="mt-24">
                                <SocialList 
                                    ulClass=""
                                    linkClass="text-heading"
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-7 ps-lg-5">
                        <div className="card common-card p-sm-4">
                            <div className="card-body">
                                <ContactUsForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;