import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionHeading from '../common/SectionHeading';
import { arrivalTabLists, products } from './../data/HomeOneData/HomeOneData';
import ProductItem from './items/ProductItem';
import Button from '../common/Button';

const ArrivalProducts = () => {
    return (
    <section className="arrival-product padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
        <img src="assets/images/gradients/product-gradient.png" alt="" className="bg--gradient white-version"/>

        <img src="assets/images/shapes/element2.png" alt="" className="element one"/>
        
        <div className="container container-two">
            <SectionHeading
                headingClass="" 
                title="New Arrival Products" 
                renderDesc={false} 
                renderButton={false} 
            />
            
            <Tabs>
                <TabList className={'nav common-tab justify-content-center nav-pills mb-48'}>
                    {
                        arrivalTabLists.map((arrivalTabList, arrivalTabListIndex) => {
                            return (
                                <Tab className={'nav-link'} key={arrivalTabListIndex}>{arrivalTabList.text}</Tab>
                            )
                        })
                    }
                </TabList>
                
                <TabPanel>
                    <div className="row gy-4">
                        {
                            products.slice(0, 8).map((productItem, productIndex) => {
                                return (
                                    <ProductItem 
                                        colClasses="col-xl-3 col-lg-4 col-sm-6" 
                                        cardClasses=""
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gy-4">
                        {
                            products.slice(4, 12).map((productItem, productIndex) => {
                                return (
                                    <ProductItem 
                                        colClasses="col-xl-3 col-lg-4 col-sm-6" 
                                        cardClasses=""
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gy-4">
                        {
                            products.slice(0, 8).map((productItem, productIndex) => {
                                return (
                                    <ProductItem 
                                        colClasses="col-xl-3 col-lg-4 col-sm-6" 
                                        cardClasses=""
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gy-4">
                        {
                            products.slice(4, 12).map((productItem, productIndex) => {
                                return (
                                    <ProductItem 
                                        colClasses="col-xl-3 col-lg-4 col-sm-6" 
                                        cardClasses=""
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gy-4">
                        {
                            products.slice(0, 8).map((productItem, productIndex) => {
                                return (
                                    <ProductItem 
                                        colClasses="col-xl-3 col-lg-4 col-sm-6" 
                                        cardClasses=""
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gy-4">
                        {
                            products.slice(4, 12).map((productItem, productIndex) => {
                                return (
                                    <ProductItem 
                                        colClasses="col-xl-3 col-lg-4 col-sm-6" 
                                        cardClasses=""
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gy-4">
                        {
                            products.slice(0, 8).map((productItem, productIndex) => {
                                return (
                                    <ProductItem 
                                        colClasses="col-xl-3 col-lg-4 col-sm-6" 
                                        cardClasses=""
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gy-4">
                        {
                            products.slice(4, 12).map((productItem, productIndex) => {
                                return (
                                    <ProductItem 
                                        colClasses="col-xl-3 col-lg-4 col-sm-6" 
                                        cardClasses=""
                                        renderWishlist={true}
                                        renderDownloadButton={false}
                                        key={productIndex}
                                        productItem={productItem}
                                    />
                                )
                            })
                        }
                    </div>
                </TabPanel>
            </Tabs>   

            <div className="text-center mt-64">
                <Button 
                    btnLink="/products" 
                    btnClass="btn-main btn-lg pill fw-300" 
                    btnText="View All Products" 
                />
            </div>

        </div>
    </section>

        
    );
};

export default ArrivalProducts;