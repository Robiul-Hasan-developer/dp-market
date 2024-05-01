import React from 'react';
import { Link } from 'react-router-dom';
import { sidebarTags } from '../../data/OthersPageData/OthersPageData';

const BlogTags = () => {
    return (
        <>
            <h6 className="common-sidebar__title"> Popular Tags </h6>
            <ul className="tag-list flx-align gap-2">
                {
                    sidebarTags.map((sidebarTag, sidebarTagIndex) => {
                        return (
                            <li className="tag-list__item" key={sidebarTagIndex}>
                                <Link to={sidebarTag.link} className="tag-list__link pill px-3 py-2 font-14 fw-500">{sidebarTag.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>   
        </>
    );
};

export default BlogTags;