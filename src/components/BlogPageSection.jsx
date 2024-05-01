import React from 'react';
import { blogData } from '../data/HomeOneData/HomeOneData';
import BlogItem from './items/BlogItem';
import Pagination from './../common/Pagination';

const BlogPageSection = () => {
    return (
        <section className="blog padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
            <img src="assets/images/shapes/pattern-five.png" className="position-absolute end-0 top-0 z-index--1" alt=""/>
            <div className="container container-two">
                <div className="row gy-4">
                    {
                        blogData.map((blogItem, blogItemIndex) => {
                            return (
                                <BlogItem blogItem={blogItem} key={blogItemIndex}/>
                            )
                        })
                    }
                </div>

                <Pagination/>
                
            </div>
        </section>
    );
};

export default BlogPageSection;