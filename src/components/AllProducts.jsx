import React, { useContext } from 'react';
import FilterForm from './FilterForm';
import FilterSidebar from './FilterSidebar';
import { FilterContext } from '../contextApi/FilterContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { productFilterTabs } from '../data/OthersPageData/OthersPageData';
import { products } from '../data/HomeOneData/HomeOneData';
import ProductItem from './items/ProductItem';
import ListGridButtons from '../common/ListGridButtons';

const AllProducts = () => {

    const {openFilterForm, handleOpenFilterForm, handleOpenProductSidebar } = useContext(FilterContext); 

    return (
        <section className="all-product padding-y-120">
            <div className="container container-two">
                <div className="row">
                    <Tabs className="col-lg-12">
                        <div className="filter-tab gap-3 flx-between">

                            <button type="button" className={`filter-tab__button btn btn-outline-light pill d-flex align-items-center ${openFilterForm ? 'active' : ''}`} onClick={handleOpenFilterForm}>
                                <span className="icon icon-left">
                                    <img src="assets/images/icons/filter.svg" alt=""/>
                                </span>
                                <span className="font-18 fw-500">Filters</span>
                            </button>
                            
                            <div className={'ms-lg-auto'}>
                                <TabList className={'nav common-tab nav-pills mb-0 gap-lg-2 gap-1 ms-lg-auto'}>
                                    {
                                        productFilterTabs.map((productFilterTab, productFilterTabIndex) => {
                                            return (
                                                <Tab className={'nav-link'} key={productFilterTabIndex}>{productFilterTab.text}</Tab>
                                            )
                                        })
                                    }
                                </TabList>
                            </div>

                            <div className="list-grid d-flex align-items-center gap-2">
                                <ListGridButtons/>
                                
                                <button className={`list-grid__button sidebar-btn text-body d-lg-none d-flex`} onClick={handleOpenProductSidebar}>
                                    <i className="las la-bars"></i>
                                </button>
                            </div>
                        </div>
                        
                        <FilterForm/>   
                        <div className="row gy-4">
                            <div className="col-xl-3 col-lg-4">
                                <FilterSidebar/>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <TabPanel>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.map((productItem, productIndex) => {
                                                return (
                                                    <ProductItem
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
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
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.slice(2, 10).map((productItem, productIndex) => {
                                                return (
                                                    <ProductItem 
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
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
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.slice(4, 12).map((productItem, productIndex) => {
                                                return (
                                                    <ProductItem 
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
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
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.slice(3, 9).map((productItem, productIndex) => {
                                                return (
                                                    <ProductItem 
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
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
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.slice(1, 11).map((productItem, productIndex) => {
                                                return (
                                                    <ProductItem 
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
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
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.slice(2, 8).map((productItem, productIndex) => {
                                                return (
                                                    <ProductItem 
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
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
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default AllProducts;