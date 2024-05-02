import React  from 'react';
import PageTitle from '../common/PageTitle';
import DashboardProfileCoverPhoto from '../components/dashboardComponents/DashboardProfileCoverPhoto';
import DashboardProfileContent from './../components/dashboardComponents/DashboardProfileContent';
import DashboardLayout from '../components/dashboardComponents/DashboardLayout';

const DashboardProfile = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Profile" />

            <DashboardLayout>
                
                <DashboardProfileCoverPhoto/>
                        
                <div className="dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--100">
                    <DashboardProfileContent/>
                </div>
            </DashboardLayout>  
        </>
    ); 
};

export default DashboardProfile;
