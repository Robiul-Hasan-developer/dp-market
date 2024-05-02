
import React from 'react';
import PageTitle from '../common/PageTitle';
import DashboardLayout from '../components/dashboardComponents/DashboardLayout';
import Setting from '../components/ProfileComponent/Setting';

const SettingPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Settings" />

            <DashboardLayout>
                
            <div className="dashboard-body__content">
                <div className="card common-card">
                    <div className="card-body">
                        <Setting/>
                    </div>
                </div>
            </div>

            </DashboardLayout>  
        </>
    ); 
};

export default SettingPage;