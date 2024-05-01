import React from 'react';
import ProfileSidebar from '../ProfileSidebar';
import { followersLists } from '../../data/OthersPageData/OthersPageData';
import FollowersItem from '../items/FollowersItem';

const Follow = ({ followersTab, followingTab }) => {
    return (
        <div className="profile-wrapper">
            <div className="profile-content">
                <div className="follow-wrapper">
                    {
                        followersLists.map((followersListItem, followersListItemIndex) => {
                            return (
                                <FollowersItem 
                                    followersListItem={followersListItem} 
                                    followersTab={followersTab} 
                                    followingTab={followingTab} 
                                    key={followersListItemIndex}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <ProfileSidebar/>
            
        </div>
    );
};

export default Follow;