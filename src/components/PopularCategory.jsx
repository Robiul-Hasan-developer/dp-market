import React from 'react';
import Slider from "react-slick";
import { popularCategories } from '../data/HomeOneData/HomeOneData';
import PopularItem from './items/PopularItem';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import 'react-tabs/style/react-tabs.css';

var settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    speed: 900,
    infinite: true,
    // prevArrow: <button type="button" className="slick-prev"><i className="las la-arrow-left"></i></button>,
    // nextArrow: <button type="button" className="slick-next"><i className="las la-arrow-right"></i></button>,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
};

const PopularCategory = () => {

  const slider = React.useRef(null);

    return (
        <section className="popular padding-y-120 overflow-hidden">

            <div className="container container-two">
              
              <SectionHeading 
                headingClass="style-left mb-64" 
                title="Popular Categories" 
                renderDesc={false} 
                renderButton={false} 
              />

                <div className="popular-slider arrow-style-two overflow-hidden position-relative">
                    <Slider {...settings} ref={slider}>
                        {
                            popularCategories.map((popularCategory, popularCategoryIndex) => {
                                return (
                                    <PopularItem popularCategory={popularCategory} key={popularCategoryIndex}/>
                                )
                            })
                        }
                    </Slider>
                    <button className='slick-arrow slick-prev' onClick={() => slider?.current?.slickPrev()}> 
                        <i className="fas fa-arrow-left"></i> 
                    </button>
                    <button className='slick-arrow slick-next' onClick={() => slider?.current?.slickNext()}> 
                        <i className="fas fa-arrow-right"></i> 
                    </button>
                </div>
                <div className="popular__button text-center">
                    <Link to="/products" className="font-18 fw-600 text-heading hover-text-main text-decoration-underline font-heading">
                      Explore More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularCategory;