import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const DashboardProfileInfo = () => {
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
                            <form action="#" autocomplete="off">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="fName" className="form-label mb-2 font-18 font-heading fw-600">First Name</label>
                                        <input type="text" className="common-input border" id="fName" value="Michel" placeholder="First Name"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="lastNamee" className="form-label mb-2 font-18 font-heading fw-600">Last Name</label>
                                        <input type="text" className="common-input border" id="lastNamee" value="Smith" placeholder="Last Name"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="phonee" className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                                        <input type="tel" className="common-input border" id="phonee" value="+880 15589 236 45" placeholder="Phone Number"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="emailAdddd" className="form-label mb-2 font-18 font-heading fw-600">Email Address</label>
                                        <input type="email" className="common-input border" id="emailAdddd" value="michel15@gmail.com" placeholder="Email Address"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="cityyy" className="form-label mb-2 font-18 font-heading fw-600">City</label>
                                        <div className="select-has-icon">
                                            <select className="common-input border" id="cityyy">
                                                <option value="1">Dhaka</option>
                                                <option value="1">Chandpur</option>
                                                <option value="1">Comilla</option>
                                                <option value="1">Rangpur</option>
                                            </select>
                                        </div>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="Stateee" className="form-label mb-2 font-18 font-heading fw-600">State/Region</label>
                                        <div className="select-has-icon">
                                            <select className="common-input border" id="Stateee">
                                                <option value="1">USA</option>
                                                <option value="1">Bangladesh</option>
                                                <option value="1">India</option>
                                                <option value="1">Pakistan</option>
                                            </select>
                                        </div>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="Postcodeee" className="form-label mb-2 font-18 font-heading fw-600">Postcode</label>
                                        <input type="text" className="common-input border" id="Postcodeee" value="1219" placeholder="Post Code"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="Countryyy" className="form-label mb-2 font-18 font-heading fw-600">Country</label>
                                        <div className="select-has-icon">
                                            <select className="common-input border" id="Countryyy">
                                                <option value="1">USA</option>
                                                <option value="1">Bangladesh</option>
                                                <option value="1">India</option>
                                                <option value="1">Pakistan</option>
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
                            <form action="#" autocomplete="off">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                                        <input type="text" className="common-input border" id="name" value="Michel" placeholder="Full Name"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="phone" className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                                        <input type="tel" className="common-input border" id="phone" value="+880 15589 236 45" placeholder="Phone Number"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="emailAdd" className="form-label mb-2 font-18 font-heading fw-600">Email Address</label>
                                        <input type="email" className="common-input border" id="emailAdd" value="michel15@gmail.com" placeholder="Email Address"/>
                                    </div>  
                                    <div className="col-sm-6 col-xs-6">
                                        <label for="city" className="form-label mb-2 font-18 font-heading fw-600">City</label>
                                        <div className="select-has-icon">
                                            <select className="common-input border" id="city">
                                                <option value="1">Dhaka</option>
                                                <option value="1">Chandpur</option>
                                                <option value="1">Comilla</option>
                                                <option value="1">Rangpur</option>
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
                            <form action="#" autocomplete="off">
                                <div className="row gy-4">

                                    <div className="col-12">
                                        <label for="current-password" className="form-label mb-2 font-18 font-heading fw-600">Current Password</label>
                                        <div className="position-relative">
                                            <input type="password" className="common-input common-input--withIcon common-input--withLeftIcon " id="current-password" placeholder="************"/>
                                            <span className="input-icon input-icon--left"><img src="assets/images/icons/key-icon.svg" alt=""/></span>
                                            <span className="input-icon password-show-hide fas fa-eye la-eye-slash toggle-password-two" id="#current-password"></span>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-xs-6">
                                        <label for="new-password" className="form-label mb-2 font-18 font-heading fw-600">New Password</label>
                                        <div className="position-relative">
                                            <input type="password" className="common-input common-input--withIcon common-input--withLeftIcon " id="new-password" placeholder="************"/>
                                            <span className="input-icon input-icon--left"><img src="assets/images/icons/lock-two.svg" alt=""/></span>
                                            <span className="input-icon password-show-hide fas fa-eye la-eye-slash toggle-password-two" id="#new-password"></span>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-xs-6">
                                        <label for="confirm-password" className="form-label mb-2 font-18 font-heading fw-600">Current Password</label>
                                        <div className="position-relative">
                                            <input type="password" className="common-input common-input--withIcon common-input--withLeftIcon " id="confirm-password" placeholder="************"/>
                                            <span className="input-icon input-icon--left"><img src="assets/images/icons/lock-two.svg" alt=""/></span>
                                            <span className="input-icon password-show-hide fas fa-eye la-eye-slash toggle-password-two" id="#confirm-password"></span>
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