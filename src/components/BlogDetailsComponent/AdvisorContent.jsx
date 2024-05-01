import React from 'react';
import AdvisorImg from '../../../public/assets/images/thumbs/advisor-img.png';

const AdvisorContent = () => {
    return (
        <div className="advisor p-3 p-lg-4 mt-40 mb-64 section-bg d-flex flex-sm-row flex-column align-items-start gap-md-4 gap-3">
            <div className="advisor__thumb flex-shrink-0">
                <img src={AdvisorImg} alt=""/>
            </div>
            <div className="advisor__content flex-grow-1">
                <h6 className="advisor__name font-18 mb-2">Brooklyn Simmons</h6>
                <span className="advisor__designation text-heading mb-3 fw-500">Chief Advisor </span>
                <p className="advisor__desc">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus.</p>
            </div>
        </div>
    );
};

export default AdvisorContent;