import React from 'react';
import DashboardProfileInfo from './DashboardProfileInfo';

const DashboardProfileContent = () => {
    return (
        <div className="profile">
            <div className="row gy-4">
                <div className="col-xxl-3 col-xl-4">
                    <div className="profile-info">
                        <div className="profile-info__inner mb-40 text-center">

                            <div className="avatar-upload mb-24">
                                <div className="avatar-edit">
                                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg"/>
                                    <label for="imageUpload">
                                        <img src="assets/images/icons/camera.svg" alt=""/>
                                    </label>
                                </div>
                                <div className="avatar-preview">
                                    <div id="imagePreview">
                                    </div>
                                </div>
                            </div>
                            
                            <h5 className="profile-info__name mb-1">Michel Smith</h5>
                            <span className="profile-info__designation font-14">Exclusive Author</span>
                        </div>

                        <ul className="profile-info-list">
                            <li className="profile-info-list__item">
                                <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                    <img src="assets/images/icons/profile-info-icon1.svg" alt="" className="icon"/>
                                    <span className="text text-heading fw-500">Username</span>
                                </span>
                                <span className="profile-info-list__info">michel15</span>
                            </li>
                            <li className="profile-info-list__item">
                                <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                    <img src="assets/images/icons/profile-info-icon2.svg" alt="" className="icon"/>
                                    <span className="text text-heading fw-500">Email</span>
                                </span>
                                <span className="profile-info-list__info">michel15@gmail.com</span>
                            </li>
                            <li className="profile-info-list__item">
                                <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                    <img src="assets/images/icons/profile-info-icon3.svg" alt="" className="icon"/>
                                    <span className="text text-heading fw-500">Phone</span>
                                </span>
                                <span className="profile-info-list__info">+880 15589 236 45</span>
                            </li>
                            <li className="profile-info-list__item">
                                <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                    <img src="assets/images/icons/profile-info-icon4.svg" alt="" className="icon"/>
                                    <span className="text text-heading fw-500">Country</span>
                                </span>
                                <span className="profile-info-list__info">Bangladesh</span>
                            </li>
                            <li className="profile-info-list__item">
                                <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                    <img src="assets/images/icons/profile-info-icon5.svg" alt="" className="icon"/>
                                    <span className="text text-heading fw-500">Balance</span>
                                </span>
                                <span className="profile-info-list__info">$0.00 USD</span>
                            </li>
                            <li className="profile-info-list__item">
                                <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                    <img src="assets/images/icons/profile-info-icon6.svg" alt="" className="icon"/>
                                    <span className="text text-heading fw-500">Member Since</span>
                                </span>
                                <span className="profile-info-list__info">Jan, 01, 2024</span>
                            </li>
                            <li className="profile-info-list__item">
                                <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                    <img src="assets/images/icons/profile-info-icon7.svg" alt="" className="icon"/>
                                    <span className="text text-heading fw-500">Purchased</span>
                                </span>
                                <span className="profile-info-list__info">0 items</span>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                <div className="col-xxl-9 col-xl-8">
                    <DashboardProfileInfo/>
                </div>
            </div>
        </div>
    );
};

export default DashboardProfileContent;