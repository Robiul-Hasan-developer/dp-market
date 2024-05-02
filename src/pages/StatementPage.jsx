import React from 'react';
import PageTitle from '../common/PageTitle';
import DashboardLayout from '../components/dashboardComponents/DashboardLayout';
import Statement from '../components/ProfileComponent/Statement';

const StatementPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Statements" />

            <DashboardLayout>
                
            <div className="dashboard-body__content">
                <Statement/>
            </div>

            </DashboardLayout>  
        </>
    ); 
};

export default StatementPage;