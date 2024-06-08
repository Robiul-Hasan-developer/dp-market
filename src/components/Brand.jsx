import React from 'react';
import Slider from 'react-slick';
import { brands } from '../data/HomeOneData/HomeOneData';

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

const Brand = () => {

    const slider = React.useRef(null);
    
    return (
        <div className="brand overflow-hidden">
            <div className="container container">
                <div className="brand-slider overflow-hidden">
                    <Slider {...settings} ref={slider}>
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
                    <button className='slick-arrow d-none slick-prev' onClick={() => slider?.current?.slickPrev()}> 
                        <i className="fas fa-arrow-left"></i> 
                    </button>
                    <button className='slick-arrow d-none slick-next' onClick={() => slider?.current?.slickNext()}> 
                        <i className="fas fa-arrow-right"></i> 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Brand;