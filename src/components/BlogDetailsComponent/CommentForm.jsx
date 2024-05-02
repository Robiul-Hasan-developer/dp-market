import React from 'react';

const CommentForm = () => {
    return (
        <div className="comment-form mt-64 mb-64" id="comment-box">
            <h5 className="mb-32">Post a comment</h5>
            <form action="#" autoComplete="off">
                <div className="row gy-4">
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                        <input type="text" className="common-input common-input--grayBg border" id="name" placeholder="Your name here"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="email" className="form-label mb-2 font-18 font-heading fw-600">Your Mail</label>
                        <input type="email" className="common-input common-input--grayBg border" id="email" placeholder="Your email here "/>
                    </div>  
                    <div className="col-sm-12">
                        <label htmlFor="comment" className="form-label mb-2 font-18 font-heading fw-600">Your Comment</label>
                        <textarea className="common-input common-input--grayBg border" id="comment" placeholder="Type your comment"></textarea>
                    </div>
                    <div className="col-sm-12">
                        <div className="common-check">
                            <input className="form-check-input" type="checkbox" name="checkbox" id="agree"/>
                            <label className="form-check-label mb-0 fw-400 font-16 text-body" htmlFor="agree">Save my details for future purchase</label>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <button className="btn btn-main btn-lg pill"> Submit
                            <span className="icon icon-right line-height-1 font-20"><i className="las la-arrow-right"></i></span> 
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;