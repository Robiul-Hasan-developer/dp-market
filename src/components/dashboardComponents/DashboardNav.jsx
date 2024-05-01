import React from 'react';
import Language from '../../common/Language';
import LightDarkMode from '../../common/LightDarkMode';
import DashboardUserProfile from './DashboardUserProfile';

const DashboardNav = () => {
    return (
        <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
            <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
                <button type="button" className="icon-btn bar-icon text-heading bg-gray-seven flx-center">
                    <i className="las la-bars"></i>
                </button>
                <button type="button" className="icon-btn arrow-icon text-heading bg-gray-seven flx-center">
                    <img src="assets/images/icons/angle-right.svg" alt=""/>
                </button>
                <form action="#" className="search-input d-sm-block d-none">
                    <span className="icon">
                        <img src="assets/images/icons/search-dark.svg" alt="" className="white-version"/>
                        <img src="assets/images/icons/search-dark-white.svg" alt="" className="dark-version"/>
                    </span>
                    <input type="text" className="common-input common-input--md common-input--bg pill w-100" placeholder="Search here..."/>
                </form>
            </div>
            <div className="dashboard-nav__right">
                <div className="header-right flx-align">
                    <div className="header-right__inner gap-sm-3 gap-2 flx-align d-flex">
                
                        {/* Light Dark Mode */}
                        <LightDarkMode/>
                        {/* Light Dark Mode */}
                
                        <DashboardUserProfile/>

                        <Language/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;