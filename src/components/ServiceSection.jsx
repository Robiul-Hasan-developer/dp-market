import React from 'react';
import { serviceItems } from '../data/HomeTwoData/HomeTwoData';
import ServiceItem from './items/ServiceItem';
import SectionHeading from '../common/SectionHeading';

const ServiceSection = () => {
    return (
        <section className="service padding-y-120 position-relative z-index-1 overflow-hidden">
            <img src="assets/images/shapes/curve-pattern3.png" alt="" className="position-absolute end-0 top-0 z-index--1"/>
            <img src="assets/images/shapes/element1.png" alt="" className="element two"/>
            <div className="container container-two">
                
                <SectionHeading
                    headingClass="style-left flx-between max-w-unset gap-4" 
                    title="Best services we provide" 
                    renderDesc={true} 
                    descClass=" font-18 w-sm"
                    desc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."
                    renderButton={true} 
                    buttonText="See All Services"
                    buttonLink="/products"
                />
                
                <div className="row gy-4">
                    {
                        serviceItems.map((serviceItem, serviceItemIndex) => {
                            return (
                                <ServiceItem serviceItem={serviceItem} key={serviceItemIndex}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;