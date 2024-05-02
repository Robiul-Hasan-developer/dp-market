import React from 'react';
import PageTitle from '../common/PageTitle';
import DashboardLayout from '../components/dashboardComponents/DashboardLayout';
import ReviewCardTable from '../components/ProfileComponent/ReviewCardTable';

const EarningPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Reviews" />

            <DashboardLayout>
                
                <div className="dashboard-body__content">
                    <div className="card common-card">
                        <div className="card-body">
                            <ReviewCardTable/>
                        </div>
                    </div>
                </div>

            </DashboardLayout>  
        </>
    ); 
};

export default EarningPage;