import React from 'react';
import CountUp from 'react-countup';
import SearchBoxTwo from '../common/SearchBoxTwo';
import SearchList from '../common/SearchList';

const BannerTwo = () => {

    const endValue = '85,000'.replace(/,/g, ''); // Remove commas from the string
    const endNumber = parseFloat(endValue);
    
    return (
        <section className="banner-two position-relative z-index-1 overflow-hidden">
            <img src="assets/images/gradients/banner-two-gradient.png" alt="" className="bg--gradient white-version"/>
            <img src="assets/images/gradients/banner-two-gradient-dark.png" alt="" className="bg--gradient dark-version"/>
            <img src="assets/images/shapes/element-moon3.png" alt="" className="element one"/>
            <img src="assets/images/shapes/element-moon2.png" alt="" className="element two"/>
            <img src="assets/images/shapes/element-moon1.png" alt="" className="element three"/>
            
            <div className="container container-full">
                <div className="row gy-sm-5 gy-4 align-items-center">

                    <div className="col-xl-3 col-sm-6 order-xl-0 order-2">
                        <div className="position-relative z-index-1">
                            <img src="assets/images/shapes/dots-sm.png" alt="" className="dotted-img d-xl-block d-none white-version"/>
                            <img src="assets/images/shapes/dots-sm-white.png" alt="" className="dotted-img d-xl-block d-none dark-version"/>
                            <div className="statistics-wrapper">
                                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                                    <h5 className="statistics__amount statistics__amount-two text-heading">
                                    <CountUp end={endNumber} duration={5.75} />+</h5>
                                    <span className="statistics__text">Active Members</span>
                                </div>
                                
                                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                                    <h5 className="statistics__amount statistics__amount-two text-heading"><CountUp end={5} duration={5.75} />+ Million</h5>
                                    <span className="statistics__text">Total Download</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="banner-two__content">
                            <h1 className="banner-two__title text-center mb-3"><CountUp end={parseFloat('858,990'.replace(/,/g, ''))} duration={5.75} />+ curated assets for download</h1>
                            <p className="banner-two__desc text-center">Lorem ipsum dolor sit amet consectetur. Arcu vestibulum dictumst fermentum rhoncus. Velit dui a lorem in sagittis nisl lectus diam.</p>
                
                            <SearchBoxTwo/>
                
                            <div className="popular-search d-flex align-items-start gap-3 justify-content-center">
                                <h6 className="popular-search__title font-18 fw-700 mb-0 mt-1 flex-shrink-0 flx-align gap-1"> <span className="d-md-flex d-none">Popular</span> Search: </h6>
                                <SearchList/>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="position-relative z-index-1">
                            <img src="assets/images/shapes/dots-sm.png" alt="" className="dotted-img d-xl-block d-none white-version"/>
                            <img src="assets/images/shapes/dots-sm-white.png" alt="" className="dotted-img d-xl-block d-none dark-version"/>
                            <div className="statistics-wrapper style-right">
                                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                                    <h5 className="statistics__amount statistics__amount-two text-heading"><CountUp end={35} duration={5.75} />k+</h5>
                                    <span className="statistics__text">Themes and Plugin</span>
                                </div>
                                
                                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                                    <h5 className="statistics__amount statistics__amount-two text-heading"><CountUp end={24} duration={5.75} />/7</h5>
                                    <span className="statistics__text">Customer Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerTwo;