import React from 'react';
import Slider from 'react-slick';
import { brands } from '../data/HomeOneData/HomeOneData';

const Brand = () => {

    var settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        pauseOnHover: true,
        arrows: false,
        draggable: true,
        speed: 900,
        infinite: true,
        prevArrow: '<button type="button" className="slick-prev"><i className="las la-arrow-left"></i></button>',
        nextArrow: '<button type="button" className="slick-next"><i className="las la-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                slidesToShow: 4,
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
    
    return (
        <div className="brand overflow-hidden">
            <div className="container container">
                <div className="brand-slider overflow-hidden">
                    <Slider {...settings}>
                        {
                            brands.map((brand, brandIndex) => {
                                return (
                                    <div className="brand-item d-flex align-items-center justify-content-center" key={brandIndex}>
                                        <img src={brand.thumb1} alt="" className="white-version"/>
                                        <img src={brand.thumbWhite1} alt="" className="dark-version"/>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    
                </div>
            </div>
        </div>
    );
};

export default Brand;