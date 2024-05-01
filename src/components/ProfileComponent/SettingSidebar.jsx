import React from 'react';
import { Link } from 'react-router-dom';
import { settingSidebarLists } from '../../data/OthersPageData/OthersPageData';

const SettingSidebar = (props) => {
    return (
        <div id="sidebar-scroll-spy" className={`setting-sidebar ${props.settingSidebarClass}`}>
            <h6 className="setting-sidebar__title">Your Details</h6>
            <ul className="setting-sidebar-list">
                {
                    settingSidebarLists.map((settingSidebarListItem, settingSidebarListItemIndex) => {

                        const activeFirstMenu = settingSidebarListItemIndex === 0; 
                        
                        return (
                            <li className="setting-sidebar-list__item" key={settingSidebarListItemIndex}>
                                <Link to={settingSidebarListItem.id} className={`setting-sidebar-list__link ${activeFirstMenu ? 'active' : ''}`}>
                                    {settingSidebarListItem.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SettingSidebar;