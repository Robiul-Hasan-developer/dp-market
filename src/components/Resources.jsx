import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Slider from 'react-slick';
import { products } from '../data/HomeOneData/HomeOneData';
import ProductItem from './items/ProductItem';

var settings = {
    slidesToShow: 4,
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
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
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

const Resources = () => {

  const slider = React.useRef(null);

    return (
        <section className="resource  padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
            <img src="assets/images/shapes/element-moon3.png" alt="" className="element one"/>
            <img src="assets/images/shapes/curve-pattern3.png" alt="" className="d-none position-absolute end-0 top-0 z-index--1"/>
            <div className="container container-two">

                <SectionHeading
                    headingClass="style-left style-flex flx-between align-items-end gap-3" 
                    title="Free Resources"
                    renderDesc={true} 
                    descClass=" font-18 w-sm"
                    desc="Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists."
                    renderButton={true} 
                    buttonText="View All Items"
                    buttonLink="/products"
                />

                <div className="resource-slider gy-4 overflow-hidden position-relative">

                    <Slider {...settings} ref={slider}>
                        {
                            products.slice(0,5).map((productItem, productIndex) => {
                                return (
                                    <ProductItem
                                        colClasses="" 
                                        cardClasses="shadow-sm"
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
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

export default Resources;