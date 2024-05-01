import React from 'react';
import { blogData } from '../data/HomeOneData/HomeOneData';
import { Link } from 'react-router-dom';
import BlogTwoItem from './items/BlogTwoItem';
import SectionHeading from '../common/SectionHeading';

const BlogTwo = () => {
    return (
        <section className="article padding-y-120 ">
            <div className="container container-two">

                <SectionHeading
                    headingClass="section-heading style-left style-flex flx-between align-items-end gap-3" 
                    title="Browse all latest blogs and articles"
                    renderDesc={false} 
                    descClass=" font-18 w-sm"
                    desc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."
                    renderButton={true} 
                    buttonText="Browse All Articles"
                    buttonLink="/blog"
                />

                <div className="article-item-wrapper">
                    {
                        blogData.slice(0, 3).map((blogItem, blogItemIndex) => {
                            return (
                                <BlogTwoItem blogItem={blogItem} key={blogItemIndex}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogTwo;