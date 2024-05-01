import React from 'react';

const SettingProfile = () => {
    return (
        <div className="card common-card border border-gray-five overflow-hidden mb-24" id="profile">
            <div className="card-header">
                <h6 className="title">Personal Profile</h6>
            </div>
            <div className="card-body">
                <div className="row gy-3">
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="fileUpload" className="form-label">Upload a New Avatar</label>
                        <input type="file" className="common-input common-input--md border--color-dark bg--white" id="fileUpload"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="fileUploadTwo" className="form-label">Upload a New Avatar</label>
                        <input type="file" className="common-input common-input--md border--color-dark bg--white" id="fileUploadTwo"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="ProfileHeading" className="form-label">Profile Heading</label>
                        <input type="text" className="common-input common-input--md border--color-dark bg--white" id="ProfileHeading"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label className="form-label">Show Country on Your</label>
                        <div className="flx-align gap-3 mt-2">
                            <div className="common-check common-radio mb-0">
                                <input className="form-check-input" type="radio" name="showCountry" id="yes"/>
                                <label className="form-check-label ps-2" htmlFor="yes">Yes</label>
                            </div>
                            <div className="common-check common-radio mb-0">
                                <input className="form-check-input" type="radio" name="showCountry" id="no"/>
                                <label className="form-check-label ps-2" htmlFor="no">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <label htmlFor="aboutProfile" className="form-label">Write Something About Your Profile</label>
                        <textarea className="common-input common-input--md border--color-dark bg--white" id="aboutProfile"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingProfile;