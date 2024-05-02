import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { DashboardStateContext } from '../../contextApi/DashboardStateContext';

const DashboardProfileInfo = () => {

    const { userNameData } = useContext(DashboardStateContext);
    
    // Password Show hide
    const [showHidePassword, setShowHidePassword] = useState(false);

    const handleShowHidePassword = () => {
        setShowHidePassword(!showHidePassword)
    }
    
    return (
        <>
            <div className="dashboard-card">
                <Tabs>
                    <div className="dashboard-card__header pb-0">
                        <TabList className={'nav tab-bordered nav-pills'}>
                            <Tab className={'nav-link'}>Personal Info </Tab>
                            <Tab className={'nav-link'}>Payouts </Tab>
                            <Tab className={'nav-link'}>Change Password </Tab>
                        </TabList>
                    </div>

                    <div className="profile-info-content">
                        <TabPanel>
                            <form action="#" autoComplete="off">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="fName" className="form-label mb-2 font-18 font-heading fw-600">First Name</label>
                                        <input type="text" className="common-input border" id="fName" defaultValue={userNameData} placeholder="First Name"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="lastNamee" className="form-label mb-2 font-18 font-heading fw-600">Last Name</label>
                                        <input type="text" className="common-input border" id="lastNamee" defaultValue="Smith" placeholder="Last Name"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="phonee" className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                                        <input type="tel" className="common-input border" id="phonee" defaultValue="+880 15589 236 45" placeholder="Phone Number"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="emailAdddd" className="form-label mb-2 font-18 font-heading fw-600">Email Address</label>
                                        <input type="email" className="common-input border" id="emailAdddd" defaultValue={`${userNameData.replace(/\s+/g, '').toLowerCase()}@gmail.com`} placeholder="Email Address"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="cityyy" className="form-label mb-2 font-18 font-heading fw-600">City</label>
                                        <div className="select-has-icon">
                                            <select className="common-input border" id="cityyy">
                                                <option defaultValue="1">Dhaka</option>
                                                <option defaultValue="1">Chandpur</option>
                                                <option defaultValue="1">Comilla</option>
                                                <option defaultValue="1">Rangpur</option>
                                            </select>
                                        </div>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="Stateee" className="form-label mb-2 font-18 font-heading fw-600">State/Region</label>
                                        <div className="select-has-icon">
                                            <select className="common-input border" id="Stateee">
                                                <option defaultValue="1">USA</option>
                                                <option defaultValue="1">Bangladesh</option>
                                                <option defaultValue="1">India</option>
                                                <option defaultValue="1">Pakistan</option>
                                            </select>
                                        </div>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="Postcodeee" className="form-label mb-2 font-18 font-heading fw-600">Postcode</label>
                                        <input type="text" className="common-input border" id="Postcodeee" defaultValue="1219" placeholder="Post Code"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="Countryyy" className="form-label mb-2 font-18 font-heading fw-600">Country</label>
                                        <div className="select-has-icon">
                                            <select className="common-input border" id="Countryyy">
                                                <option defaultValue="1">USA</option>
                                                <option defaultValue="1">Bangladesh</option>
                                                <option defaultValue="1">India</option>
                                                <option defaultValue="1">Pakistan</option>
                                            </select>
                                        </div>
                                    </div>  
                                    
                                    <div className="col-sm-12 text-end">
                                        <button className="btn btn-main btn-lg pill mt-4"> Update Profile</button>
                                    </div>
                                </div>
                            </form>                    
                        </TabPanel>

                        <TabPanel>
                            <form action="#" autoComplete="off">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                                        <input type="text" className="common-input border" id="name" defaultValue={userNameData} placeholder="Full Name"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="phone" className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                                        <input type="tel" className="common-input border" id="phone" defaultValue="+880 15589 236 45" placeholder="Phone Number"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="emailAdd" className="form-label mb-2 font-18 font-heading fw-600">Email Address</label>
                                        <input type="email" className="common-input border" id="emailAdd" defaultValue={`${userNameData.replace(/\s+/g, '').toLowerCase()}@gmail.com`} placeholder="Email Address"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="city" className="form-label mb-2 font-18 font-heading fw-600">City</label>
                                        <div className="select-has-icon">
                                            <select className="common-input border" id="city">
                                                <option defaultValue="1">Dhaka</option>
                                                <option defaultValue="1">Chandpur</option>
                                                <option defaultValue="1">Comilla</option>
                                                <option defaultValue="1">Rangpur</option>
                                            </select>
                                        </div>
                                    </div>  
                                    <div className="col-sm-12 text-end">
                                        <button className="btn btn-main btn-lg pill mt-4"> Pay Now</button>
                                    </div>
                                </div>
                            </form>    
                        </TabPanel>

                        <TabPanel>
                            <form action="#" autoComplete="off">
                                <div className="row gy-4">

                                    <div className="col-12">
                                        <label htmlFor="current-password" className="form-label mb-2 font-18 font-heading fw-600">Current Password</label>
                                        <div className="position-relative">
                                            <input type={`${showHidePassword ? 'text' : 'password'}`} className="common-input common-input--withIcon common-input--withLeftIcon " id="current-password" placeholder="************"/>
                                            <span className="input-icon input-icon--left"><img src="assets/images/icons/key-icon.svg" alt=""/></span>
                                            <span className={`input-icon password-show-hide ${showHidePassword ? 'fas fa-eye' : 'fas la-eye-slash'}`} onClick={handleShowHidePassword} id="#current-password"></span>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="new-password" className="form-label mb-2 font-18 font-heading fw-600">New Password</label>
                                        <div className="position-relative">
                                            <input type={`${showHidePassword ? 'text' : 'password'}`} className="common-input common-input--withIcon common-input--withLeftIcon " id="new-password" placeholder="************"/>
                                            <span className="input-icon input-icon--left"><img src="assets/images/icons/lock-two.svg" alt=""/></span>
                                            <span className={`input-icon password-show-hide ${showHidePassword ? 'fas fa-eye' : 'fas la-eye-slash'}`} onClick={handleShowHidePassword} id="#new-password"></span>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="confirm-password" className="form-label mb-2 font-18 font-heading fw-600">Current Password</label>
                                        <div className="position-relative">
                                            <input type={`${showHidePassword ? 'text' : 'password'}`} className="common-input common-input--withIcon common-input--withLeftIcon " id="confirm-password" placeholder="************"/>
                                            <span className="input-icon input-icon--left"><img src="assets/images/icons/lock-two.svg" alt=""/></span>
                                            <span className={`input-icon password-show-hide ${showHidePassword ? 'fas fa-eye' : 'fas la-eye-slash'}`} onClick={handleShowHidePassword} id="#confirm-password"></span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-12 text-end">
                                        <button className="btn btn-main btn-lg pill mt-4"> Update Password</button>
                                    </div>
                                </div>
                            </form>    
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </>
    );
};

export default DashboardProfileInfo;