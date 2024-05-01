import React from 'react';
import { Link } from 'react-router-dom';

import ReplyIcon from '../../../public/assets/images/icons/reply-icon.svg';
import Comment1 from '../../../public/assets/images/thumbs/comment1.png';
import Comment2 from '../../../public/assets/images/thumbs/comment2.png';

const Comment = () => {
    return (
        <div className="comment mt-64 mb-64">
            <h5 className="mb-32">2 Comments</h5>
            <ul className="comment-list">
                <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                    <div className="comment-list__thumb flex-shrink-0">
                        <img src={Comment1} className="cover-img" alt=""/>
                    </div>
                    <div className="comment-list__content">
                        <div className="flx-between gap-2 align-items-start">
                            <div>
                                <h6 className="comment-list__name font-18 mb-sm-2 mb-1">Jenny Wilson</h6>
                                <span className="comment-list__date font-14">Jan 21, 2024 at 11:25 pm</span>
                            </div>
                            <Link className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline" to="#comment-box"> 
                                Reply 
                                <span className="icon"><img src={ReplyIcon} alt=""/></span>
                            </Link>
                        </div>
                        <p className="comment-list__desc mt-3">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus mi viverra. Quam faucibus morbi cras vitae neque. Necnunc pellentesque massa pretium.</p>
                    </div>
                </li>
                <li>
                    <ul className="comment-list comment-list--two">
                        <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                            <div className="comment-list__thumb flex-shrink-0">
                                <img src={Comment2} className="cover-img" alt=""/>
                            </div>
                            <div className="comment-list__content">
                                <div className="flx-between gap-2 align-items-start">
                                    <div>
                                        <h6 className="comment-list__name font-18 mb-sm-2 mb-1">Courtney Henry</h6>
                                        <span className="comment-list__date font-14">Jan 21, 2024 at 11:25 pm</span>
                                    </div>
                                    <Link className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline" to="#comment-box"> 
                                        Reply 
                                        <span className="icon"><img src={ReplyIcon} alt=""/></span>
                                    </Link>
                                </div>
                                <p className="comment-list__desc mt-3">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus.</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Comment;