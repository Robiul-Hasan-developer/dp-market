import React from 'react';
import { products } from '../data/HomeOneData/HomeOneData';
import ProductItem from './items/ProductItem';
import Slider from "react-slick";
import SectionHeading from '../common/SectionHeading';

var settings = {
    slidesToShow: 3,
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
        slidesToShow: 2,
        }
    },
    {
        breakpoint: 767,
        settings: {
        slidesToShow: 2,
        }
    },
    {
        breakpoint: 575,
        settings: {
        slidesToShow: 1,
        }
    },
    ]
};

const SellingProducts = (props) => {
    
    const slider = React.useRef(null);
    
    return (
        <section className="selling-product padding-y-120 position-relative z-index-1 overflow-hidden">
            <img src="assets/images/gradients/selling-gradient.png" alt="" className="bg--gradient"/>

            <img src="assets/images/shapes/element2.png" alt="" className="element one"/>
            <img src="assets/images/shapes/element1.png" alt="" className="element two"/>

            <img src="assets/images/shapes/curve-pattern1.png" alt="" className="position-absolute start-0 top-0 z-index--1"/>
            <img src="assets/images/shapes/curve-pattern2.png" alt="" className="position-absolute end-0 top-0 z-index--1"/>
            
            <div className="container container-two">

                <SectionHeading
                    headingClass="style-left style-white flx-between max-w-unset gap-4" 
                    title={props.sectionTitle} 
                    renderDesc={true} 
                    descClass=" font-18 w-sm"
                    desc={props.sectionDesc}
                    renderButton={true} 
                    buttonText="View All Items"
                    buttonLink="/products"
                />

                <div className="selling-product-slider overflow-hidden position-relative">
                    <Slider {...settings} ref={slider}>
                        {
                            products.slice(1, 5).map((productItem, productIndex) => {
                                return (
                                    <ProductItem 
                                        colClasses="" 
                                        cardClasses=""
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
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
            </div>
        </section>
    );
};

export default SellingProducts;