import React from 'react';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import DashboardSidebar from '../components/dashboardComponents/DashboardSidebar';
import DashboardNav from '../components/dashboardComponents/DashboardNav';
import DashboardFooter from './../components/dashboardComponents/DashboardFooter';
import DashboardProfileCoverPhoto from '../components/dashboardComponents/DashboardProfileCoverPhoto';
import DashboardProfileContent from './../components/dashboardComponents/DashboardProfileContent';

const DashboardProfile = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Profile" />
            <MobileMenu/>

            <section className="dashboard">
                <div className="dashboard__inner d-flex">

                    {/* ===================== Dashboard Sidebar Start ======================= */}
                    <DashboardSidebar/>
                    {/* ===================== Dashboard Sidebar End ======================= */}
                    
                    <div className="dashboard-body">
                        
                        {/* Dashboard Nav Start */}
                        <DashboardNav/>
                        {/* Dashboard Nav End */}

                        <DashboardProfileCoverPhoto/>
                        
                        <div className="dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--100">
                            <DashboardProfileContent/>
                        </div>
                                
                        {/* ====================== Dashboard Footer Start ======================== */}
                        <DashboardFooter/>
                        {/* ====================== Dashboard Footer End ======================== */}
                    </div>
                </div>
            </section>
                
        </>
    ); 
};

export default DashboardProfile;
