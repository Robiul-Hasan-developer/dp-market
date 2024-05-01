import React from 'react';

const SettingPersonal = () => {
    return (
        <div className="card common-card border border-gray-five overflow-hidden mb-24"  id="personalInfo">
            <div className="card-header">
                <h6 className="title">Personal Information</h6>
            </div>
            <div className="card-body">
                <div className="row gy-3">
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="fName" className="form-label">First Name</label>
                        <input type="text" className="common-input common-input--md border--color-dark bg--white" id="fName"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="lName" className="form-label">Last Name</label>
                        <input type="text" className="common-input common-input--md border--color-dark bg--white" id="lName"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input type="text" className="common-input common-input--md border--color-dark bg--white" id="country"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="common-input common-input--md border--color-dark bg--white" id="address"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="common-input common-input--md border--color-dark bg--white" id="city"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="zipCode" className="form-label">Zip Code</label>
                        <input type="text" className="common-input common-input--md border--color-dark bg--white" id="zipCode"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingPersonal;