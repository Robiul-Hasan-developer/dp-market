import React from 'react';
import { Link } from 'react-router-dom';
import { sidebarCategories } from '../../data/OthersPageData/OthersPageData';

const BlogCategories = () => {
    return (
        <>
            <h6 className="common-sidebar__title"> Categories </h6>
            <ul className="category-list">
                {
                    sidebarCategories.map((sidebarCategory, sidebarCategoryIndex) => {
                        return (
                            <li className="category-list__item" key={sidebarCategoryIndex}>
                                <Link to={sidebarCategory.link} className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
                                    <span className="icon font-12"> {sidebarCategory.icon}</span>
                                    <span className="text">{sidebarCategory.text}</span>
                                </Link> 
                            </li>
                        )
                    })
                }
            </ul>   
        </>
    );
};

export default BlogCategories;