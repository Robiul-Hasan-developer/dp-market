import React from 'react';
import PageTitle from '../common/PageTitle';
import DashboardLayout from '../components/dashboardComponents/DashboardLayout';
import Earning from '../components/ProfileComponent/Earning';

const EarningPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Earnings" />

            <DashboardLayout>

                <div className="dashboard-body__content">
                    <Earning/>
                </div>

            </DashboardLayout>  
        </>
    ); 
};

export default EarningPage;