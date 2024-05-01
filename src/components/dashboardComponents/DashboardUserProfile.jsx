import React, { useState } from 'react';
import { dbSidebarLists } from '../../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';

const DashboardUserProfile = () => {

    // Filtered the lists
    const filteredSidebarLists = dbSidebarLists.filter(item => 
        item.text === 'Profile' || item.text === 'Settings' || item.text === 'Logout'
    ); 

    // Show Dropdown
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleShowProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown); 
    }

    // Handle Body Click
    document.addEventListener('click', (event) => {
        if(event.target.closest('.user-profile-dropdown') === null && event.target.closest('.user-profile__button') === null) {
            setShowProfileDropdown(false); 
        }
    });
    
    return (
        <div className="user-profile">
            <button className="user-profile__button flex-align" onClick={handleShowProfileDropdown}>
                <span className="user-profile__thumb">
                    <img src="assets/images/thumbs/user-profile.png" className="cover-img" alt=""/>
                </span>
            </button>
            <ul className={`user-profile-dropdown ${showProfileDropdown ? 'show' : ''}`}>
                {
                    filteredSidebarLists.map((dbSidebarListItem, dbSidebarListItemIndex) => {
                        return (
                            <li className="sidebar-list__item" key={dbSidebarListItemIndex}>
                                <Link to={dbSidebarListItem.path} className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={dbSidebarListItem.icon} alt="" className="icon"/>
                                        <img src={dbSidebarListItem.iconActive} alt="" className="icon icon-active"/>
                                    </span>
                                    <span className="text">{dbSidebarListItem.text}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default DashboardUserProfile;