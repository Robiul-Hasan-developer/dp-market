import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { blogData } from '../data/HomeOneData/HomeOneData';
import BlogItem from './items/BlogItem';

const Blog = () => {
    return (
        <section className="blog padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
            <img src="assets/images/shapes/pattern-five.png" className="position-absolute end-0 top-0 z-index--1" alt=""/>
            <div className="container container-two">

                <SectionHeading
                    headingClass="style-left style-flex flx-between align-items-end gap-3" 
                    title="Browse all latest blogs and articles" 
                    renderDesc={false} 
                    descClass=" font-18 w-sm"
                    desc="Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists."
                    renderButton={true} 
                    buttonText="Browse All Articles"
                    buttonLink="/blog"
                />

                <div className="row gy-4">
                    {
                        blogData.slice(0,3).map((blogItem, blogItemIndex) => {
                            return (
                                <BlogItem blogItem={blogItem} key={blogItemIndex}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;