import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { Link } from 'react-router-dom';
import { contributorItems } from '../data/HomeTwoData/HomeTwoData';
import ContributorItem from './items/ContributorItem';
import Button from '../common/Button';

const FeaturedContributors = () => {
    return (
        <>
            <section className="featured-contributor padding-y-120 position-relative z-index-1 overflow-hidden">

                <img src="assets/images/shapes/pattern-curve-3.png" alt="" className="position-absolute start-0 top-0 z-index--1"/>

                <img src="assets/images/shapes/element-moon1.png" alt="" className="element two"/>
                <img src="assets/images/shapes/element1.png" alt="" className="element one"/>

                <div className="container container-two">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-4 col-lg-5">
                            <div className="section-content">

                                <SectionHeading
                                    headingClass="style-left" 
                                    title="Featured Contributors" 
                                    renderDesc={true} 
                                    descClass=" font-18 w-sm"
                                    desc="Who creates useful, qualitful, customer centric digital products"
                                    renderButton={false} 
                                    buttonText="View All Items"
                                />
                                <Button
                                    btnLink="/profile" 
                                    btnClass="btn-main btn-lg pill fw-300" 
                                    btnText="All Contributors" 
                                />
                                
                            </div>
                        </div>

                        <div className="col-xl-2 d-xl-block d-none"></div>

                        <div className="col-xl-6 col-lg-7">
                            <div className="row gy-4">
                                {
                                    contributorItems.map((contributorItem, contributorItemIndex) => {
                                        return (
                                            <ContributorItem contributorItem={contributorItem} key={contributorItemIndex}/>
                                        )
                                    })
                                }
                            </div>
                        </div>  
                    </div>
                </div>
                </section>   
        </>
    );
};

export default FeaturedContributors;