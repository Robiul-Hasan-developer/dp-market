import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { techItems } from '../data/HomeTwoData/HomeTwoData';
import { products } from '../data/HomeOneData/HomeOneData';
import PopularCardItem from './items/PopularCardItem';

const PopularItemSection = () => {

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }, []);

    // Popular item Shuffled by array 
    const shuffleArray = (provideArray) => {
        for (let i = provideArray.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [provideArray[i], provideArray[j]] = [provideArray[j], provideArray[i]];
        }
        return provideArray;
    }
    
    return (
        <>
            <section className="popular-item-card-section padding-y-120 overflow-hidden">

                <img src="assets/images/shapes/brush.png" alt="" className="element-brush"/>

                <div className="container container-two">
                    <div className="section-heading">
                        <h3 className="section-heading__title">Popular Items</h3>
                    </div>

                    <Tabs>
                        <TabList className={'nav common-tab style-icon justify-content-center align-items-center nav-pills mb-48'}>
                            {
                                techItems.map((techItem, techItemIndex) => {
                                    return (
                                        <Tab className={'nav-link'} key={techItemIndex}>
                                            <span className="tech-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={techItem.text}>
                                                <img src={techItem.icon} alt="" className="white-version"/>
                                                <img src={techItem.iconWhite} alt="" className="dark-version"/>
                                                <span className="text">{techItem.text}</span>
                                            </span>
                                        </Tab>
                                    )
                                })
                            }
                        </TabList>
                        
                        <TabPanel>
                            <div className="row gy-4">
                                {
                                    shuffleArray(products).map((productItem, productIndex) => {
                                        return (
                                            <PopularCardItem productItem={productItem} key={productIndex}/>
                                        )
                                    })
                                }
                            </div>   
                        </TabPanel>
                        <TabPanel>
                            <div className="row gy-4">
                                {
                                    shuffleArray(products).map((productItem, productIndex) => {
                                        return (
                                            <PopularCardItem productItem={productItem} key={productIndex}/>
                                        )
                                    })
                                }
                            </div>   
                        </TabPanel>
                        <TabPanel>
                            <div className="row gy-4">
                                {
                                    shuffleArray(products).map((productItem, productIndex) => {
                                        return (
                                            <PopularCardItem productItem={productItem} key={productIndex}/>
                                        )
                                    })
                                }
                            </div>   
                        </TabPanel>
                        <TabPanel>
                            <div className="row gy-4">
                                {
                                    shuffleArray(products).map((productItem, productIndex) => {
                                        return (
                                            <PopularCardItem productItem={productItem} key={productIndex}/>
                                        )
                                    })
                                }
                            </div>   
                        </TabPanel>
                        <TabPanel>
                            <div className="row gy-4">
                                {
                                    shuffleArray(products).map((productItem, productIndex) => {
                                        return (
                                            <PopularCardItem productItem={productItem} key={productIndex}/>
                                        )
                                    })
                                }
                            </div>   
                        </TabPanel>
                        <TabPanel>
                            <div className="row gy-4">
                                {
                                    shuffleArray(products).map((productItem, productIndex) => {
                                        return (
                                            <PopularCardItem productItem={productItem} key={productIndex}/>
                                        )
                                    })
                                }
                            </div>   
                        </TabPanel>
                        <TabPanel>
                            <div className="row gy-4">
                                {
                                    shuffleArray(products).map((productItem, productIndex) => {
                                        return (
                                            <PopularCardItem productItem={productItem} key={productIndex}/>
                                        )
                                    })
                                }
                            </div>   
                        </TabPanel>
                        <TabPanel>
                            <div className="row gy-4">
                                {
                                    shuffleArray(products).map((productItem, productIndex) => {
                                        return (
                                            <PopularCardItem productItem={productItem} key={productIndex}/>
                                        )
                                    })
                                }
                            </div>   
                        </TabPanel>
                        <TabPanel>
                            <div className="row gy-4">
                                {
                                    shuffleArray(products).map((productItem, productIndex) => {
                                        return (
                                            <PopularCardItem productItem={productItem} key={productIndex}/>
                                        )
                                    })
                                }
                            </div>   
                        </TabPanel>
                    </Tabs> 
                </div>   
            </section>   
        </>
    );
};

export default PopularItemSection;