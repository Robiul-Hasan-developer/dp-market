import React from 'react';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import DashboardSidebar from '../components/dashboardComponents/DashboardSidebar';
import DashboardNav from '../components/dashboardComponents/DashboardNav';
import DashboardFooter from './../components/dashboardComponents/DashboardFooter';
import FollowersItem from '../components/items/FollowersItem';
import { followersLists } from '../data/OthersPageData/OthersPageData';

const Following = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Following" />
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
                            <div class="card common-card">
                                <div class="card-body">
                                    <div class="follow-wrapper">
                                        {
                                            followersLists.map((followersListItem, followersListItemIndex) => {
                                                return (
                                                    <FollowersItem 
                                                        followersListItem={followersListItem} 
                                                        followersTab={true} 
                                                        followingTab={false} 
                                                        key={followersListItemIndex}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
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

export default Following;


