import React, { useState } from 'react';
import ProfileContent from './ProfileComponent/ProfileContent';
import SearchBox from './../common/SearchBox';
import { productFilterTabs } from '../data/OthersPageData/OthersPageData';
import { products } from '../data/HomeOneData/HomeOneData';
import ProductItem from './items/ProductItem';
import ListGridButtons from './../common/ListGridButtons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Follow from './ProfileComponent/Follow';
import Setting from './ProfileComponent/Setting';
import HiddenItem from './ProfileComponent/HiddenItem';
import Refund from './ProfileComponent/Refund';
import Earning from './ProfileComponent/Earning';
import Statement from './ProfileComponent/Statement';
import ReviewCardTable from './ProfileComponent/ReviewCardTable';
import Download from './ProfileComponent/Download';

const ProfileSection = () => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchValueChange = (event) => {
        const searchText = event.target.value; 
        const searchTextLowercase = searchText.toLowerCase().trim(); 
        console.log(searchTextLowercase);
        setSearchValue(searchTextLowercase); 
    }
    
    return (
        <section className="profile pt-5 padding-b-120">
            <Tabs>
                <div className="container container-two">
                    
                    <div className="tab-content" id="pills-tabb">
                        
                        {/* Profile Content Start */}
                        <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                            <ProfileContent/>
                        </div>
                        {/* Profile Content End */}


                        <div className="tab-pane fade" id="pills-portfolio" role="tabpanel" aria-labelledby="pills-portfolio-tab" tabIndex="0">
                            {/* Portfolio Tab Start */}
                            <div className="filter-tab gap-3 flx-between mb-5">
                                <ListGridButtons/>
                                <TabList className={'nav common-tab nav-pills mb-0 gap-lg-2 gap-1 me-auto'}>
                                    {
                                        productFilterTabs.map((productFilterTab, productFilterTabIndex) => {
                                            return (
                                                <Tab className={'nav-link'} key={productFilterTabIndex}>{productFilterTab.text}</Tab>
                                            )
                                        })
                                    }
                                </TabList>
                                
                                {/* <SearchBox formClass="style-three" inputClass="pill search-item"  placeholderText="Search Product..."/> */}

                                <form action='#' className={`search-box style-three`}>
                                    <input type="text" className={`common-input pill search-item`} onChange={handleSearchValueChange} placeholder="Search Product..."/>
                                    <button type="submit" className="btn btn-main btn-icon icon border-0">
                                        <img src="assets/images/icons/search.svg" alt=""/>
                                    </button>
                                </form> 

                            </div>
                            <div className="col-xl-12">
                                <TabPanel>
                                    <div className="row gy-4 list-grid-wrapper">
                                            {
                                                products.filter(productItem => {
                                                        const productTitleLower = productItem.title.toLowerCase().includes(searchValue);
                                                        return productTitleLower; 
                                                    }).map((productItem, productIndex) => (
                                                        <ProductItem
                                                            colClasses="col-lg-4 col-sm-6" 
                                                            cardClasses="section-bg"
                                                            renderWishlist={true}
                                                            renderDownloadButton={false}
                                                            key={productIndex}
                                                            productItem={productItem}
                                                        />
                                                    ))
                                            }
                                            {
                                                products.filter(productItem => productItem.title.toLowerCase().includes(searchValue)).length === 0 && (
                                                    <div className="col-12">Product Not Found</div>
                                                )
                                            }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {/* {
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
                                         */}
                                            {
                                                products.filter(productItem => {
                                                        const productTitleLower = productItem.title.toLowerCase().includes(searchValue);
                                                        return productTitleLower; 
                                                    }).slice(4, 12).map((productItem, productIndex) => (
                                                        <ProductItem
                                                            colClasses="col-lg-4 col-sm-6" 
                                                            cardClasses="section-bg"
                                                            renderWishlist={true}
                                                            renderDownloadButton={false}
                                                            key={productIndex}
                                                            productItem={productItem}
                                                        />
                                                    ))
                                            }
                                            {
                                                products.filter(productItem => productItem.title.toLowerCase().includes(searchValue)).length === 0 && (
                                                    <div className="col-12">Product Not Found</div>
                                                )
                                            }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.filter(productItem => {
                                                    const productTitleLower = productItem.title.toLowerCase().includes(searchValue);
                                                    return productTitleLower; 
                                                }).slice(0, 8).map((productItem, productIndex) => (
                                                    <ProductItem
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
                                                        renderWishlist={true}
                                                        renderDownloadButton={false}
                                                        key={productIndex}
                                                        productItem={productItem}
                                                    />
                                                ))
                                        }
                                        {
                                            products.filter(productItem => productItem.title.toLowerCase().includes(searchValue)).length === 0 && (
                                                <div className="col-12">Product Not Found</div>
                                            )
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.filter(productItem => {
                                                    const productTitleLower = productItem.title.toLowerCase().includes(searchValue);
                                                    return productTitleLower; 
                                                }).slice(2, 10).map((productItem, productIndex) => (
                                                    <ProductItem
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
                                                        renderWishlist={true}
                                                        renderDownloadButton={false}
                                                        key={productIndex}
                                                        productItem={productItem}
                                                    />
                                                ))
                                        }
                                        {
                                            products.filter(productItem => productItem.title.toLowerCase().includes(searchValue)).length === 0 && (
                                                <div className="col-12">Product Not Found</div>
                                            )
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.filter(productItem => {
                                                    const productTitleLower = productItem.title.toLowerCase().includes(searchValue);
                                                    return productTitleLower; 
                                                }).slice(1, 9).map((productItem, productIndex) => (
                                                    <ProductItem
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
                                                        renderWishlist={true}
                                                        renderDownloadButton={false}
                                                        key={productIndex}
                                                        productItem={productItem}
                                                    />
                                                ))
                                        }
                                        {
                                            products.filter(productItem => productItem.title.toLowerCase().includes(searchValue)).length === 0 && (
                                                <div className="col-12">Product Not Found</div>
                                            )
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {
                                            products.filter(productItem => {
                                                    const productTitleLower = productItem.title.toLowerCase().includes(searchValue);
                                                    return productTitleLower; 
                                                }).slice(3, 12).map((productItem, productIndex) => (
                                                    <ProductItem
                                                        colClasses="col-lg-4 col-sm-6" 
                                                        cardClasses="section-bg"
                                                        renderWishlist={true}
                                                        renderDownloadButton={false}
                                                        key={productIndex}
                                                        productItem={productItem}
                                                    />
                                                ))
                                        }
                                        {
                                            products.filter(productItem => productItem.title.toLowerCase().includes(searchValue)).length === 0 && (
                                                <div className="col-12">Product Not Found</div>
                                            )
                                        }
                                    </div>
                                </TabPanel>
                            </div>
                            {/* Portfolio Tab End */}
                        </div>

                        {/* Followers Start */}
                        <div className="tab-pane fade" id="pills-followers" role="tabpanel" aria-labelledby="pills-followers-tab" tabIndex="0">
                            <Follow followingTab={true} followersTab={false}/>
                        </div>
                        {/* Followers Start */}


                        {/* Following Start */}
                        <div className="tab-pane fade" id="pills-following" role="tabpanel" aria-labelledby="pills-following-tab" tabIndex="0">
                           <Follow followingTab={false} followersTab={true}/>
                        </div>
                        {/* Following End */}

                        {/* Setting Start */}
                        <div className="tab-pane fade" id="pills-settings" role="tabpanel" aria-labelledby="pills-settings-tab" tabIndex="0">
                            <Setting/>
                        </div>
                        {/* Setting End */}

                        {/* Hidden Item Start */}
                        <div className="tab-pane fade" id="pills-hidden-item" role="tabpanel" aria-labelledby="pills-hidden-item-tab" tabIndex="0">
                            <HiddenItem/>
                        </div>
                        {/* Hidden Item End */}

                        {/* =========================== Refund Section Start ========================= */}
                        <div className="tab-pane fade" id="pills-refunded" role="tabpanel" aria-labelledby="pills-refunded-tab" tabIndex="0">
                            <Refund/>
                        </div>
                        {/* =========================== Refund Section End ========================= */}

                        {/* =========================== Refund Section End ========================= */}
                        <div className="tab-pane fade" id="pills-earning" role="tabpanel" aria-labelledby="pills-earning-tab" tabIndex="0">
                            <Earning/>
                        </div>
                        {/* =========================== Refund End ========================= */}

                        {/* =========================== Statement Start ========================= */}
                        <div className="tab-pane fade" id="pills-statement" role="tabpanel" aria-labelledby="pills-statement-tab" tabIndex="0">
                            <Statement/>
                        </div>
                        {/* =========================== Statement Tab End ========================= */}

                        {/* =========================== Review Tab Start ========================= */}
                        <div className="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab" tabIndex="0">
                            <ReviewCardTable/>
                        </div>                 
                        {/* =========================== Review Section End ========================= */}

                        {/* =========================== Download Tab End ========================= */}
                        <div className="tab-pane fade" id="pills-download" role="tabpanel" aria-labelledby="pills-download-tab" tabIndex="0">
                            <Download/>
                        </div>                 
                        {/* =========================== Download Tab End ========================= */}

                        
                    </div>
                </div>
            </Tabs>
        </section>
    );
};

export default ProfileSection;