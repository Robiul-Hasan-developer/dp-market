import React from 'react';

const Refund = () => {
    return (
        <div className="row gy-4">
            <div className="col-lg-8">
                <div className="refund-feedback">
                    <h5 className="refund-feedback__title">Refund requests made against items you sold</h5>
                    <p className="refund-feedback__desc">There are no open refund requests at the moment.</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="profile-sidebar">
                    <div className="profile-sidebar__item">
                        <h6 className="title font-body">Open Request</h6>
                        <div className="select-has-icon">
                            <select className="common-input">
                                <option defaultValue="1">Open Requests</option>
                                <option defaultValue="1">Open Requests</option>
                                <option defaultValue="1">Open Requests</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Refund;