import React from 'react';
import PageTitle from '../common/PageTitle';
import DashboardBalanceContent from '../components/dashboardComponents/DashboardBalanceContent';
import EarningTable from '../components/ProfileComponent/EarningTable';
import DashboardWidgets from './../components/dashboardComponents/DashboardWidgets';
import DashboardBodyCards from './../components/dashboardComponents/DashboardBodyCards';
import DashboardLayout from '../components/dashboardComponents/DashboardLayout';

const Dashboard = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard" />

            <DashboardLayout>

                <div className="dashboard-body__content">
                    <DashboardBalanceContent />
                    <div className="dashboard-body__item-wrapper">
                        <DashboardWidgets />
                        <DashboardBodyCards />
                        <div className="dashboard-body__item">
                            <EarningTable tableClass="style-two" />
                        </div>
                    </div>
                </div>
                
            </DashboardLayout>        
        </>
    ); 
};

export default Dashboard;