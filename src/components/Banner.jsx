import React from 'react';
import TechList from './TechList';
import SearchBox from '../common/SearchBox';
import { bannerContent } from '../data/HomeOneData/HomeOneData';
import CountUp from 'react-countup';

const Banner = () => {
    return (
        <section className="banner section-bg z-index-1">
            <img src="assets/images/gradients/banner-gradient.png" alt="" className="bg--gradient white-version"/>

            <img src="assets/images/shapes/element-moon1.png" alt="" className="element one"/>
            <img src="assets/images/shapes/element-moon2.png" alt="" className="element two"/>
            
            <div className="container container-two">
                <div className="row align-items-center gy-sm-5 gy-4">
                    <div className="col-lg-6">
                        <div className="banner-inner position-relative pe-lg-5">
                            <div className="banner-content">
                                <h1 className="banner-content__title">{bannerContent.title}</h1>
                                <p className="banner-content__desc font-18">{bannerContent.desc}</p>

                                <SearchBox formClass=""  inputClass="common-input--lg pill shadow-sm" placeholderText="Search theme, plugins & more..."/>
                                
                                <TechList/>
                                
                            </div>            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumb">
                            <img src={bannerContent.thumb} alt=""/>

                            <img src="assets/images/shapes/dots.png" alt="" className="dotted-img white-version"/>
                            <img src="assets/images/shapes/dots-white.png" alt="" className="dotted-img dark-version"/>
                            <img src="assets/images/shapes/element2.png" alt="" className="element two end-0"/>

                            <div className="statistics animation bg-main text-center">
                                <h5 className="statistics__amount text-white">
                                    <CountUp end={100} duration={5.75} />k
                                </h5>
                                <span className="statistics__text text-white font-14">Customers</span>
                            </div>

                            <div className="statistics style-two bg-white text-center">
                                <h5 className="statistics__amount statistics__amount-two text-heading">
                                    <CountUp end={22} duration={5.75} />k
                                </h5>
                                <span className="statistics__text text-heading font-14">Themes & Plugins</span>
                            </div>
                            
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;