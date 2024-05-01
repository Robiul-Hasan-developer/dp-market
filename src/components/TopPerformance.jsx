import React from 'react';
import { performanceData } from '../data/HomeOneData/HomeOneData';
import CountUp from 'react-countup';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import CircleTextTwo from '../common/CircleTextTwo';

const TopPerformance = () => {
    return (
        <section className="top-performance overflow-hidden padding-y-120 position-relative z-index-1">
            <img src="assets/images/shapes/spider-net.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 white-version"/>
            <img src="assets/images/shapes/spider-net-white.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 dark-version"/>
            <img src="assets/images/shapes/pattern-curve-four.png" alt="" className="position-absolute top-0 start-0 z-index--1"/>

            <img src="assets/images/shapes/element2.png" alt="" className="element two"/>
            
            <div className="container container-two">
                <div className="row gy-4 align-items-center flex-wrap-reverse">
                    <div className="col-lg-7 pe-lg-5">
                        <div className="position-relative">

                            <CircleTextTwo circleClass="style-two" rotateText="Our Top Performance"/>
                            
                            <div className="performance-content">
                                {
                                    performanceData.map((performanceItem, performanceItemIndex) => {
                                        return (
                                            <div className="performance-content__item" key={performanceItemIndex}>
                                                <span className="performance-content__text font-18">{performanceItem.text}</span>
                                                <h4 className="performance-content__count">
                                                    <CountUp end={parseInt(performanceItem.count)} duration={6} delay={0.2} />+
                                                </h4>
                                                
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-content">

                            <SectionHeading
                                headingClass="style-left" 
                                title="Top Performance" 
                                renderDesc={true} 
                                descClass=" font-18 w-sm"
                                desc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."
                                renderButton={false} 
                                buttonText="View All Items"
                            />
                            
                            <Button 
                                btnLink="/register" 
                                btnClass="btn-main btn-lg pill fw-300" 
                                btnText="Get Started" 
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopPerformance;