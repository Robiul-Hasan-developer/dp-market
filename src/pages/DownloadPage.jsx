
import React from 'react';
import PageTitle from '../common/PageTitle';
import DashboardLayout from '../components/dashboardComponents/DashboardLayout';
import Download from '../components/ProfileComponent/Download';

const DownloadPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Downloads" />

            <DashboardLayout>
                
                <div className="dashboard-body__content">
                    <div className="card common-card">
                        <div className="card-body">
                            <Download/>
                        </div>
                    </div>
                </div>

            </DashboardLayout>  
        </>
    ); 
};

export default DownloadPage;