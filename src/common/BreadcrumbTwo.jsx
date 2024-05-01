import React from 'react';
import BreadcrumbList from './BreadcrumbList';

const BreadcrumbTwo = (props) => {
    return (
        <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
            <div className="breadcrumb-two">
                <img src="assets/images/gradients/breadcrumb-gradient-bg.png" alt="" className="bg--gradient"/>

                <div className="container container-two">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="breadcrumb-two-content text-center">
            
                                <BreadcrumbList 
                                    pageName="Blog"
                                    renderSubLink={props.renderSubLink}
                                    SubLinkText={props.SubLinkText}
                                    SubLinkPath={props.SubLinkPath}
                                />
                                
                                <h3 className="breadcrumb-two-content__title mb-0 text-capitalize">{props.pageTitle}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadcrumbTwo;