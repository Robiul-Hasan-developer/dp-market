import React, { useContext } from 'react';
import Language from '../../common/Language';
import LightDarkMode from '../../common/LightDarkMode';
import DashboardUserProfile from './DashboardUserProfile';
import { DashboardContext } from '../../contextApi/DashboardContext';

const DashboardNav = () => {

    const {collapseSidebar, handleCollapseSidebar} = useContext(DashboardContext);
    
    return (
        <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
            <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
                <button type="button" className="icon-btn bar-icon text-heading bg-gray-seven flx-center" onClick={handleCollapseSidebar}> 
                    {
                        collapseSidebar ? (
                            <i class="las la-arrow-right"></i>
                        ) : (
                            <i className="las la-bars"></i>
                        )
                    }
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