import React from 'react';
import { layoutFeatures, moreItems, templateFeatures } from '../data/OthersPageData/OthersPageData';
import { Link, useLocation } from 'react-router-dom';


const ProductDetailsContent = () => {

    const location = useLocation(); 
    
    return (
        <>
         <div className="product-details">
            <div className="product-details__thumb">
                <img src={location.state.thumb} alt="" className='cover-img'/>
            </div>
            <div className="product-details__buttons flx-align justify-content-center gap-3">
                <Link to="#" className="btn btn-main d-inline-flex align-items-center gap-2 pill px-sm-5 justify-content-center">Live Preview 
                    <img src="assets/images/icons/eye-outline.svg" alt=""/> 
                </Link>
                
                <a
                    href={location.state.thumb}
                    className="screenshot-btn btn btn-white pill px-sm-5" >
                    Screenshot
                </a>

            </div>

            <p className="product-details__desc">System management saas products, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

            <div className="product-details__item">
                <h5 className="product-details__title mb-3">Template Features</h5>
                <ul className="product-list">
                    {
                        templateFeatures.map((templateFeature, templateFeatureIndex) => {
                            return (
                                <li className="product-list__item" key={templateFeatureIndex}>{templateFeature.text}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="product-details__item">
                <h5 className="product-details__title mb-3">Layout Features</h5>
                <ul className="product-list">
                    {
                        layoutFeatures.map((layoutFeature, layoutFeatureIndex) => {
                            return (
                                <li className="product-list__item" key={layoutFeatureIndex}>{layoutFeature.text}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="product-details__item">
                <h5 className="product-details__title mb-3">Font Family</h5>
                <ul className="product-list">
                    <li className="product-list__item text-heading">
                        <Link to="https://fonts.google.com/specimen/Fira+Sans?query=fira" className="link text-body hover-text-main hover-text-decoration-underline">Fira Sans</Link>
                    </li>
                    <li className="product-list__item text-heading">
                        <Link to="https://fonts.google.com/specimen/Inter?query=inter" className="link text-body hover-text-main hover-text-decoration-underline">Inter</Link>
                    </li>
                </ul>
            </div>
            <div className="product-details__item">
                <h5 className="product-details__title mb-3">Support</h5>
                <p className="product-details__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>

            <div className="more-item">
                <div className="flx-between mb-4">
                    <h5 className="more-item__title">More Items</h5>
                    <Link to="profile.html" className="text-heading fw-500 hover-text-decoration-underline">View Author Profile</Link>
                </div>
                <div className="more-item__content flx-align">
                    {
                        moreItems.map((moreItem, moreItemIndex) => {
                            return (
                                <div className="more-item__item" key={moreItemIndex}>
                                    <Link to="/products" className="link w-100 h-100 d-block">
                                        <img src={moreItem.imgLocation} alt=""/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>   
        </>
    );
};

export default ProductDetailsContent;