import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentFormattedDate, slugURL } from '../../utility/Utility';

const BlogItem = ({ blogItem }) => {

    const {thumb, tag, title, adminThumb, adminName} = blogItem;

    //  Formatted Date Started 
    const formattedDate = getCurrentFormattedDate(); 
    //  Formatted Date End 
    
    // Blog Details Slug
    const blogURL = slugURL({ url: 'blog', slug: title }); 

    
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="blog-item">
                <div className="blog-item__thumb">
                    <Link to={blogURL} state={{ thumb, title, tag, adminThumb, adminName, formattedDate }} className="link">
                        <img src={thumb} className="cover-img" alt=""/>
                    </Link>
                </div>
                <div className="blog-item__content">
                    <div className="blog-item__top flx-align">
                        <Link to="/blog" className="blog-item__tag pill font-14 text-heading fw-500 hover-text-main">{tag}</Link>
                        <div className="blog-item__date font-14 flx-align gap-2 font-14 text-heading fw-500"> 
                            <span className="icon">
                                <img src="assets/images/icons/calendar.svg" alt="" className="white-version"/>
                                <img src="assets/images/icons/calendar-white.svg" alt="" className="dark-version"/>
                            </span> 
                            <span className="text">
                                { formattedDate }
                            </span>
                        </div>
                    </div>
                    <h5 className="blog-item__title">
                        <Link to={blogURL} state={{ thumb, title, tag, adminThumb, adminName, formattedDate }} className="link">{title}</Link>
                    </h5>
                    <Link to={blogURL} state={{ thumb, title, tag, adminThumb, adminName, formattedDate }} className="btn btn-outline-light pill fw-600">Read More </Link>
                </div>
            </div>
        </div> 
    );
};

export default BlogItem;