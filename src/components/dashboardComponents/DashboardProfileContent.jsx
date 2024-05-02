import React, { useContext } from 'react';
import DashboardProfileInfo from './DashboardProfileInfo';
import { DashboardStateContext } from '../../contextApi/DashboardStateContext';
import { getCurrentFormattedDate } from '../../utility/Utility';
import UploadImage from './UploadImage';

const DashboardProfileContent = () => {

    const { userNameData } = useContext(DashboardStateContext);
    
    const currentDate = getCurrentFormattedDate(); 
    
    return (
        <div className="profile">
            <div className="row gy-4">
                <div className="col-xxl-3 col-xl-4">
                    <div className="profile-info">
                        <div className="profile-info__inner mb-40 text-center">

                            <UploadImage imageType="profile" />
                            
                            <h5 className="profile-info__name mb-1">{userNameData}</h5>
                            <span className="profile-info__designation font-14">Exclusive Author</span>
                        </div>

                        <ul className="profile-info-list">
                            <li className="profile-info-list__item">
                                <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                    <img src="assets/images/icons/profile-info-icon1.svg" alt="" className="icon"/>
                                    <span className="text text-heading fw-500">Username</span>
                                </span>
                                <span className="profile-info-list__info">{userNameData}</span>
                            </li>
                            <li className="profile-info-list__item">
                                <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                    <img src="assets/images/icons/profile-info-icon2.svg" alt="" className="icon"/>
                                    <span className="text text-heading fw-500">Email</span>
                                </span>
                                <span className="profile-info-list__info">{userNameData.replace(/\s+/g, '').toLowerCase()}@gmail.com</span>
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
                                <span className="profile-info-list__info">{currentDate}</span>
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