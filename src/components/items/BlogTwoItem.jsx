import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentFormattedDate, slugURL } from '../../utility/Utility';

const BlogTwoItem = ({ blogItem }) => {

    const {thumb, tag, title, adminThumb, desc, adminName} = blogItem;

    // Formatted Date Started 
    const formattedDate = getCurrentFormattedDate(); 
    // Formatted Date End 

    // Blog Details Slug
    const blogURL = slugURL({ url: 'blog', slug: title })
    
    
    return (
        <div className="article-item">
            <div className="article-item__inner d-flex position-relative">
                <div className="article-item__start">
                    <div className="user-info">
                        <div className="user-info__thumb">
                            <img src={adminThumb} alt="" className='cover-img'/>
                        </div>
                        <span className="user-info__text mt-2 mb-1 font-14 text-heading">Posted by</span>
                        <h6 className="user-info__name font-16 font-body fw-600 mb-0">{adminName} </h6>
                    </div>
                </div>
                <div className="article-item__center d-flex align-items-center">
                    <div className="article-item__content">
                        <div className="article-item__top flx-align">
                            <Link to="/blog" className="article-item__tag font-14">Startup</Link>
                            <Link to="/blog" className="article-item__tag font-14">Marketing</Link>
                            <span className="text-heading font-16 fw-500">{formattedDate}</span>
                        </div>
                        <h4 className="article-item__title mb-3">
                            <Link to={blogURL} state={{ thumb, title, tag, adminThumb, adminName, formattedDate }} className="link"> {title}</Link>
                        </h4>
                        <p className="article-item__desc">{desc}</p>
                    </div>
    
                    <div className="article-item__thumb">
                        <img src={thumb} alt=""/>
                    </div>
                </div>
            </div>
            <div className="article-item__end flex-shrink-0">
                <Link to={blogURL} state={{ thumb, title, tag, adminThumb, adminName, formattedDate }} className="btn-simple">Read More <span className="icon font-26"><i className="las la-arrow-right"></i></span> </Link>
            </div>
        </div>
    );
};

export default BlogTwoItem;