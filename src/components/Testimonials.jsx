import React from 'react';
import SectionHeading from './../common/SectionHeading';
import { testimonialItems } from '../data/HomeTwoData/HomeTwoData';
import Slider from "react-slick";
import TestimonialItem from './items/TestimonialItem';

var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    speed: 900,
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
};

const Testimonials = () => {

    const slider = React.useRef(null);
    
    return (
        <section className="testimonial padding-y-120 position-relative section-bg overflow-hidden">

            <img src="assets/images/shapes/brush.png" alt="" className="element-brush"/>
            
            <div className="container container-two">

                <SectionHeading
                    headingClass="style-left flx-between max-w-unset gap-4" 
                    title="Clients Feedback"
                    renderDesc={false} 
                    descClass=" font-18 w-sm"
                    desc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."
                    renderButton={true} 
                    buttonText="More Feedback"
                    buttonLink="/contact"
                />

                <div className="testimonial-slider overflow-hidden position-relative">
                    <Slider {...settings} ref={slider}>
                        {
                            testimonialItems.map((testimonialItem, testimonialItemIndex) => {
                                return (
                                <TestimonialItem testimonialItem={testimonialItem} key={testimonialItemIndex}/>
                                )
                            })
                        }
                    </Slider>
                    <button className='slick-arrow d-none slick-prev' onClick={() => slider?.current?.slickPrev()}> 
                        <i className="fas fa-arrow-left"></i> 
                    </button>
                    <button className='slick-arrow d-none slick-next' onClick={() => slider?.current?.slickNext()}> 
                        <i className="fas fa-arrow-right"></i> 
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;