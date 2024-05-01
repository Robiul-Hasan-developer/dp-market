import React from 'react';
import { emailSettingCheckboxes } from '../../data/OthersPageData/OthersPageData';

const SettingEmail = () => {
    return (
        <div className="card common-card border border-gray-five overflow-hidden mb-24" id="emailSetting">
            <div className="card-header">
                <h6 className="title">Email Settings</h6>
            </div>
            <div className="card-body">
                <div className="row gy-3">
                    {
                        emailSettingCheckboxes.map((emailSettingCheckbox, emailSettingCheckboxIndex) => {

                            const textConvertToSlug = (text) => {
                                return text.toLowerCase().replace(/\s+/g, '-'); 
                            }
                            const textSlug = textConvertToSlug(emailSettingCheckbox.text); 
                            
                            return (
                                <div className="col-sm-6 col-xs-6" key={emailSettingCheckboxIndex}>
                                    <div className="common-check">
                                        <input className="form-check-input" type="checkbox" id={textSlug}/>
                                        <label className="form-check-label" htmlFor={textSlug}> {emailSettingCheckbox.text}</label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SettingEmail;