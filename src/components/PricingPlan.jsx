import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { pricingPlans } from '../data/HomeTwoData/HomeTwoData';
import PriceItem from './items/PriceItem';

const PricingPlan = () => {
    return (
        <section className="pricing padding-y-120 position-relative z-index-1">
            <img src="assets/images/shapes/element1.png" alt="" className="element one"/>
            <img src="assets/images/gradients/pricing-gradient-bg.png" alt="" className="bg--gradient"/>
            <Tabs>
                <div className="container container-two">
                    <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
                        <div className="section-heading__inner w-lg">
                            <h3 className="section-heading__title">Our Best Pricing Plan</h3>
                            <p className="section-heading__desc">Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists.</p>
                        </div>
                        <div className="pricing-tabs">
                            <TabList className={'nav tab-gradient nav-pills mb-0" id="pills-tab-pricing'}>
                                <Tab className={'nav-link pill'} >Monthly</Tab>
                                <Tab className={'nav-link pill'} >Yearly</Tab>
                            </TabList>
                        </div>
                    </div>
                        
                    <TabPanel>
                        <div className="row gy-4">
                            {
                                pricingPlans.slice(0, 3).map((pricingPlan, pricingPlanIndex) => {
                                    return (
                                        <PriceItem pricingPlan={pricingPlan} key={pricingPlanIndex}/>
                                    )
                                })
                            }
                        </div>  
                    </TabPanel>
                    
                    <TabPanel>
                        <div className="row gy-4">
                            {
                                pricingPlans.slice(3, 6).map((pricingPlan, pricingPlanIndex) => {
                                    return (
                                        <PriceItem pricingPlan={pricingPlan} key={pricingPlanIndex}/>
                                    )
                                })
                            }
                        </div>
                    </TabPanel>

                </div>
            </Tabs>   
        </section>
    );
};

export default PricingPlan;