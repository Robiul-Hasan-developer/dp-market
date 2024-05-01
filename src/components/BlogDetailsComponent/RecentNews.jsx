import React from 'react';
import RecentBlogItem from '../items/RecentBlogItem';
import { blogData } from '../../data/HomeOneData/HomeOneData';

const RecentNews = () => {
    return (
        <>
            <h6 className="common-sidebar__title">Recent News</h6>
            {
                blogData.slice(0,3).map((blogItem, blogItemIndex) => {
                    return (
                        <RecentBlogItem blogItem={blogItem} key={blogItemIndex}/>
                    )
                })
            }
            
           
            
        </>
    );
};

export default RecentNews;