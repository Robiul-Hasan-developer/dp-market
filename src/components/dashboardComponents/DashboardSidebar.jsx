import React from 'react';
import { Link } from 'react-router-dom';
import { dbSidebarLists } from '../../data/OthersPageData/OthersPageData';

const DashboardSidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <button type="button" className="dashboard-sidebar__close d-lg-none d-flex"><i className="las la-times"></i></button>
            <div className="dashboard-sidebar__inner">
                <Link to="/" className="logo mb-48">
                    <img src="assets/images/logo/logo.png" alt="" className="white-version"/>
                    <img src="assets/images/logo/white-logo-two.png" alt="" className="dark-version"/>
                </Link>
                <Link to="/" className="logo favicon mb-48">
                    <img src="assets/images/logo/favicon.png" alt=""/>
                </Link>
        
                {/* Sidebar List Start */}
                <ul className="sidebar-list">
                    {
                        dbSidebarLists.map((dbSidebarListItem, dbSidebarListItemIndex) => {
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
                {/* Sidebar List End */}
                
            </div>
        </div>
    );
};

export default DashboardSidebar;