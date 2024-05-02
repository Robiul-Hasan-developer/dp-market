import React, { useContext } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardNav from './DashboardNav';
import DashboardFooter from './DashboardFooter';
import { DashboardContext } from '../../contextApi/DashboardContext';

const DashboardLayout = ({ children }) => {

    const {collapseSidebar } = useContext(DashboardContext);

    return (
        <>
            <section className={`dashboard ${collapseSidebar ? 'active' : ''}`}>
                <div className="dashboard__inner d-flex">

                    {/* Dashboard Sidebar Start */}
                    <DashboardSidebar/>
                    {/* Dashboard Sidebar End */}
                    
                    <div className="dashboard-body">
                        
                        {/* Dashboard Nav Start */}
                        <DashboardNav/>
                        {/* Dashboard Nav End */}
                        
                        { children }
                                
                        {/* Dashboard Footer Start */}
                        <DashboardFooter/>
                        {/* Dashboard Footer End */}
                    </div>
                </div>
            </section>
        </>
    ); 
};

export default DashboardLayout;


