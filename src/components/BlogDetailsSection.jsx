import React from 'react';
import Quote from './BlogDetailsComponent/Quote';
import { useLocation, Link } from 'react-router-dom';
import InterviewCandidats from './BlogDetailsComponent/InterviewCandidats';
import AdvisorContent from './BlogDetailsComponent/AdvisorContent';
import CommentForm from './BlogDetailsComponent/CommentForm';
import Comment from './BlogDetailsComponent/Comment';
import ClockIcon from '../../public/assets/images/icons/clock.svg';
import BlogSidebar from './BlogDetailsComponent/BlogSidebar';

const BlogDetailsSection = () => {

    const location = useLocation(); 
    
    return (
        <section className="blog-details padding-y-120 position-relative overflow-hidden">
            <div className="container container-two">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        {/* blog details top Start  */}
                        <div className="blog-details-top mb-64">
                            <div className="blog-details-top__info flx-align gap-3 mb-4">
                                <div className="blog-details-top__thumb flx-align gap-2">
                                    <img src={location.state.adminThumb} alt=""/>
                                    <span className="text-heading fw-500">{location.state.adminName}</span>
                                </div>
                                <span className="blog-details-top__date flx-align gap-2">
                                    <img src={ClockIcon} alt=""/>
                                    {location.state.formattedDate}
                                </span>
                            </div>
                            <h2 className="blog-details-top__title mb-4 text-capitalize">{location.state.title}</h2> 
                            <p className="blog-details-top__desc"> <strong>{location.state.title}.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan. </p>
                        </div>
                        {/* blog details top End  */}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        {/* blog details content Start  */}
                        <div className="blog-details-content">
                            <div className="blog-details-content__thumb mb-32">
                                <img src={location.state.thumb} alt=""/>
                            </div>
                            <p className="blog-details-content__desc mb-40">Design and development may seem like two separate worlds, but they can work together seamlessly to create stunning and functional software. In this post, we'll explore the benefits of integrating design and development early on in a project.</p>

                            <InterviewCandidats/>

                            {/* Quote Text */}
                            <Quote/>
                            {/* Quote Text */}
                            
                            <h5 className="blog-details-content__title mb-3">Once you hire them, give them access for all tools & resources for success</h5>
                            <p className="blog-details-content__desc mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut suspendisse convallis enim tincidunt nunc condimentum facilisi accumsan tempor donec.</p>

                            
                            {/* Post Tag & Share Start */}
                            <div className="flx-between gap-2 mb-40 mt-40">
                                <div className="post-tag flx-align gap-3">
                                    <span className="post-tag__text text-heading fw-500">Post Tag: </span>
                                    <ul className="post-tag__list flx-align gap-2">
                                        <li className="post-tag__item">
                                            <Link to="/blog" className="post-tag__link font-14 text-heading pill fw-500">Business</Link>
                                        </li>
                                        <li className="post-tag__item">
                                            <Link to="/blog" className="post-tag__link font-14 text-heading pill fw-500">Marketing</Link>
                                        </li>
                                        <li className="post-tag__item">
                                            <Link to="/blog" className="post-tag__link font-14 text-heading pill fw-500">Strategy</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="socail-share flx-align gap-3">
                                    <span className="socail-share__text text-heading fw-500">Share On: </span>
                                    <ul className="social-list colorful-style">
                                        <li className="social-list__item">
                                            <Link to="https://www.facebook.com" className="social-list__link text-heading font-16 flex-center"><i className="fab fa-facebook-f"></i></Link> 
                                        </li>
                                        <li className="social-list__item">
                                            <Link to="https://www.twitter.com" className="social-list__link text-heading font-16 flex-center"> <i className="fab fa-linkedin-in"></i></Link>
                                        </li>
                                        <li className="social-list__item">
                                            <Link to="https://www.google.com" className="social-list__link text-heading font-16 flex-center"> <i className="fab fa-twitter"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Post Tag & Share End */}

                            {/* Advisor content Start */}
                            <AdvisorContent/>
                            {/* Advisor content End */}

                            {/* Comment Form Start */}
                            <CommentForm/>
                            {/* Comment Form End */}

                            {/* Comment Start */}
                            <Comment/>
                            {/* Comment End */}
                            
                        </div>
                        {/* blog details content End */}
                    </div>
                    <div className="col-lg-4">
                        <BlogSidebar/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BlogDetailsSection;