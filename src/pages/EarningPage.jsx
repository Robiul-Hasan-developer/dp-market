import React from 'react';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import DashboardSidebar from '../components/dashboardComponents/DashboardSidebar';
import DashboardNav from '../components/dashboardComponents/DashboardNav';
import DashboardFooter from '../components/dashboardComponents/DashboardFooter';
import Earning from '../components/ProfileComponent/Earning';

const EarningPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Earning" />
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
                            <Earning/>
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

export default EarningPage;