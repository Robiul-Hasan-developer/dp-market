import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { dbSidebarLists } from '../../data/OthersPageData/OthersPageData';
import { DashboardContext } from '../../contextApi/DashboardContext';

const DashboardSidebar = () => {

    const {collapseSidebar, handleCollapseSidebarClose} = useContext(DashboardContext);

    const location = useLocation(); 
    
    return (
        <>  
            {
                collapseSidebar && (
                    <div className="side-overlay show" onClick={handleCollapseSidebarClose}></div>
                )
            }
            <div className={`dashboard-sidebar ${collapseSidebar ? 'active' : ''}`}>

                <button type="button" className="dashboard-sidebar__close d-lg-none d-flex" onClick={handleCollapseSidebarClose}>
                    <i className="las la-times"></i>
                </button>
                
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
                                    <li className={`sidebar-list__item ${location.pathname === dbSidebarListItem.path ? 'activePage' : ''}`} key={dbSidebarListItemIndex}>
                                        <Link to={dbSidebarListItem.path} className="sidebar-list__link" title={dbSidebarListItem.text}>
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
        </>
    );
};

export default DashboardSidebar;