import React from 'react';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import DashboardSidebar from '../components/dashboardComponents/DashboardSidebar';
import DashboardNav from '../components/dashboardComponents/DashboardNav';
import DashboardFooter from '../components/dashboardComponents/DashboardFooter';
import Earning from '../components/ProfileComponent/Earning';
import Setting from '../components/ProfileComponent/Setting';

const SettingPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Settings" />
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

                        <div className="dashboard-body__content">
                            <div className="card common-card">
                                <div className="card-body">
                                    <Setting/>
                                </div>
                            </div>
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

export default SettingPage;