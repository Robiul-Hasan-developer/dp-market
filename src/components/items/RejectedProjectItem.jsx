import React from 'react';
import { getCurrentFormattedDate, getCurrentTime } from '../../utility/Utility';

const RejectedProjectItem = ({ rejectedItem }) => {

    const {reviewerThumb, name, designation, projectThumb, projectName, responseLists} = rejectedItem; 

    const formattedDate = getCurrentFormattedDate(); 

    const currentTime = getCurrentTime();  

    return (
        <div className="card common-card border border-gray-five overflow-hidden">
            <div className="card-body">
                <div className="product-reject__content d-flex flex-sm-row flex-column align-items-start gap-md-5 gap-4">
                    <div className="product-reviewer flx-align flex-nowrap gap-3 flex-shrink-0">
                        <div className="product-reviewer__thumb flex-shrink-0">
                            <img src={reviewerThumb} alt=""/>
                        </div>
                        <div className="product-reviewer__content">
                            <h6 className="product-reviewer__name mb-0">{name}</h6>
                            <span className="product-reviewer__designation font-14">{designation}</span>
                        </div>
                    </div>
                    <div className="product-reject__item flex-grow-1">
                        <div className="product-reject-info flx-align flex-nowrap gap-3">
                            <div className="product-reject-info__thumb flex-shrink-0">
                                <img src={projectThumb} alt=""/>
                            </div>
                            <div className="product-reject-info__content">
                                <h6 className="product-reject-info__name mb-0">{projectName}</h6>
                                <span className="product-reject-info__date font-14">{formattedDate} at {currentTime}</span>
                            </div>
                        </div>
                        <ul className="response-list">
                            {
                                responseLists.map((responseListItem, responseListItemIndex) => {
                                    return (
                                        <li className="response-list__item" key={responseListItemIndex}>
                                            <h6 className="response-list__title fw-600 mb-2">{responseListItem.title}</h6>
                                            <p className="response-list__desc font-14">{responseListItem.desc}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RejectedProjectItem;