import React from 'react';
import PageTitle from '../common/PageTitle';
import DashboardLayout from '../components/dashboardComponents/DashboardLayout';
import FollowersItem from './../components/items/FollowersItem';
import { followersLists } from '../data/OthersPageData/OthersPageData';

const Followers = () => {
    return (
        <>
            <PageTitle title="DP Market - Dashboard Followers" />

            <DashboardLayout>
                
                <div className="dashboard-body__content">
                    <div className="card common-card">
                        <div className="card-body">
                            <div className="follow-wrapper">
                                {
                                    followersLists.map((followersListItem, followersListItemIndex) => {
                                        return (
                                            <FollowersItem
                                                followersListItem={followersListItem} 
                                                followersTab={false} 
                                                followingTab={true} 
                                                key={followersListItemIndex}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </DashboardLayout>  
        </>
    ); 
};

export default Followers;
