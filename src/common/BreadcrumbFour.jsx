import React from 'react';
import BreadcrumbList from '../common/BreadcrumbList';
import { Link } from 'react-router-dom';
import { processLists } from '../data/OthersPageData/OthersPageData';

const BreadcrumbFour = ({pageTitle, pageName, currentPage }) => {

    // Active page Condition here
    const getActivePageClass = (processListItemIndex) => {
        if(currentPage === 'Cart' && processListItemIndex === 0) {
            return 'activePage'
        } else if (currentPage === 'MailingAddress' && processListItemIndex <= 1) {
            return 'activePage'
        } else if (currentPage === 'PaymentMethod' && processListItemIndex <= 2) {
            return 'activePage'
        } else {
            return ''; 
        }
    }
    // Active page Condition End here
    
    return (
        <section className="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden">

            <img src="assets/images/gradients/breadcrumb-gradient-bg.png" alt="" className="bg--gradient"/>

            <img src="assets/images/shapes/element-moon3.png" alt="" className="element one"/>
            <img src="assets/images/shapes/element-moon1.png" alt="" className="element three"/>
            
            <div className="container container-two">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="breadcrumb-four-content">

                            <h3 className="breadcrumb-four-content__title text-center mb-3 text-capitalize">{pageTitle}</h3>

                            <BreadcrumbList 
                                pageName={pageName}
                                renderSubLink={false}
                                SubLinkText="products"
                                SubLinkPath="/cart"
                            />

                            <ul className="process-list">
                                {
                                    processLists.map((processListItem, processListItemIndex) => {
                                        return (
                                            <li className={`process-list__item ${getActivePageClass(processListItemIndex)} `} key={processListItemIndex}>
                                                <Link to={processListItem.link} className="process-list__link">
                                                    <div className="icons">
                                                        <span className="icon white">
                                                            <img src={processListItem.whiteIcon} alt=""/>
                                                        </span>
                                                        {
                                                            processListItem.coloredIcon && (
                                                                <span className="icon colored">
                                                                    <img src={processListItem.coloredIcon} alt=""/>
                                                                </span>
                                                            )
                                                        }
                                                    </div>
                                                    <span className="text">{processListItem.text}</span>
                                                </Link>
                                            </li>
                                        )
                                    })  
                                }
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadcrumbFour;