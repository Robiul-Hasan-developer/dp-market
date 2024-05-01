import React from 'react';
import SidebarSearch from './SidebarSearch';
import RecentNews from './RecentNews';
import BlogCategories from './BlogCategories';
import BlogTags from './BlogTags';

const BlogSidebar = () => {
    return (
        <div className="common-sidebar-wrapper">
            <div className="common-sidebar p-0">
                <SidebarSearch/>
            </div>
        
            <div className="common-sidebar">
                <RecentNews/>
            </div>
        
            <div className="common-sidebar">
                <BlogCategories/>
            </div>
        
            <div className="common-sidebar">
                <BlogTags/>
            </div>
        
        </div>
    );
};

export default BlogSidebar;