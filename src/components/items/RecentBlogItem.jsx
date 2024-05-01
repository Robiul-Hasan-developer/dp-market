import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentFormattedDate, slugURL } from '../../utility/Utility';

const RecentBlogItem = ({ blogItem }) => {

    const {thumb, tag, title, adminThumb, adminName} = blogItem;

    // Formatted Date Started 
    const formattedDate = getCurrentFormattedDate(); 
    // Formatted Date End 

    // Blog Details Slug
    const blogURL = slugURL({ url: 'blog', slug: title })
    

    return (
        <>
            <div className="latest-blog">
                <div className="latest-blog__thumb">
                    <Link to={blogURL}  state={{ thumb, title, tag, adminThumb, adminName, formattedDate }}> 
                        <img src={thumb} className="cover-img" alt=""/>
                    </Link>
                </div>
                <div className="latest-blog__content">
                    <span className="latest-blog__date font-14 mb-2">{formattedDate} </span>
                    <h6 className="latest-blog__title fw-500 font-body font-16">
                        <Link to={blogURL}  state={{ thumb, title, tag, adminThumb, adminName, formattedDate }}>
                            {title}
                        </Link>
                    </h6>
                </div>
            </div>  
        </>
    );
};

export default RecentBlogItem;