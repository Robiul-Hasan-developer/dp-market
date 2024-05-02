import React from 'react';
import PageTitle from '../common/PageTitle';
import DashboardLayout from '../components/dashboardComponents/DashboardLayout';
import Refund from '../components/ProfileComponent/Refund';

const DownloadPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Refund" />

            <DashboardLayout>
                
                <div className="dashboard-body__content">
                    <Refund/>
                </div>

            </DashboardLayout>  
        </>
    ); 
};

export default DownloadPage;