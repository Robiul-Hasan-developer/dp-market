import React from 'react';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import DashboardSidebar from '../components/dashboardComponents/DashboardSidebar';
import DashboardNav from '../components/dashboardComponents/DashboardNav';
import DashboardBalanceContent from '../components/dashboardComponents/DashboardBalanceContent';
import EarningTable from '../components/ProfileComponent/EarningTable';
import DashboardWidgets from './../components/dashboardComponents/DashboardWidgets';
import DashboardBodyCards from './../components/dashboardComponents/DashboardBodyCards';
import DashboardFooter from './../components/dashboardComponents/DashboardFooter';

const Dashboard = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard" />
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
                            {/* welcome balance Content Start */}
                            <DashboardBalanceContent/>
                            {/* welcome balance Content End */}
            
                            <div className="dashboard-body__item-wrapper">
            
                                {/* dashboard body Item Start */}
                                <DashboardWidgets/>
                                {/* dashboard body Item End */}
                                
                                {/* dashboard body Item Start */}
                                <DashboardBodyCards/>
                                {/* dashboard body Item End */}
                                
                                {/* dashboard body Item Start */}
                                <div className="dashboard-body__item">
                                    <EarningTable tableClass="style-two"/>
                                </div>
                                {/* dashboard body Item End */}
                                
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

export default Dashboard;


