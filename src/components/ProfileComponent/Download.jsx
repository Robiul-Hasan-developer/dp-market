import React, { useState } from 'react';
import { downloadProducts } from '../../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';
import StarRating from '../../common/StarRating';
import { getRandomNumber, slugURL } from '../../utility/Utility';

const Download = () => {

    // Random Sales & Rating 
    const {randomRatingText, randomSales} = getRandomNumber(); 

    // Download item search 
    const [downloadSearch, setDownloadSearch] = useState("");

    const handleDownloadSearchChange = (event) => {
        const downloadSearchValue = event.target.value;
        const downloadSearchLowercase = downloadSearchValue.toLowerCase().trim(); 
        setDownloadSearch(downloadSearchLowercase);
    }
    
    return (
        <div className="row gy-4">
            <div className="col-lg-12">

                <form action="#" className="search-box ">
                    <input type="text" onChange={handleDownloadSearchChange} className="common-input common-input--lg pill border border-gray-five" placeholder="Search your downloads"/>
                    <button type="submit" className="btn btn-main btn-icon icon border-0">
                        <img src="assets/images/icons/search.svg" alt=""/>
                    </button>
                </form>

            </div>
            <div className="col-lg-12">
                <div className="download-wrapper">
                    {
                        downloadProducts.filter(downloadProductItem => {
                            const titleLower = downloadProductItem.title.toLowerCase().includes(downloadSearch);
                            return titleLower; 
                        }).map((downloadProductItem, downloadProductItemIndex) => {

                            const {thumb, title, checkboxText, author, price} = downloadProductItem; 

                            // Product Details Slug
                            const productURL = slugURL({url: 'products', slug: title}); 

                            return (
                                <div className={`download-item flx-between gap-3`} key={downloadProductItemIndex}>
                                    <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
                                        <div className="download-item__thumb flex-shrink-0"> 
                                            <img src={thumb} alt=""/>
                                        </div>
                                        <div className="download-item__info">
                                            <h6 className="download-item__title mb-1">
                                                <Link to={productURL} state={{ thumb, title, author, price, randomRatingText, randomSales }} className="link">
                                                    {title}
                                                </Link>
                                            </h6>
                                            <Link to="#" className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline">Tools License</Link>
                                            <div className="common-check">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id={downloadProductItemIndex}/>
                                                <label className="form-check-label text-body fw-400 mb-0" htmlFor={downloadProductItemIndex}>{checkboxText}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
                                        <button type="button" className="btn btn-main pill px-4">
                                            Download <span className="icon-right icon ms-0"> <i className="las la-download"></i></span>  
                                        </button>
                                        <div className="bg-white py-1 px-2 rounded d-inline-block">
                                            <StarRating starItemClass=""/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        downloadProducts.filter(downloadProductItem => downloadProductItem.title.toLowerCase().includes(downloadSearch)).length === 0 && (
                            <div className="text-center">Download Product Not Found</div>   
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Download;
