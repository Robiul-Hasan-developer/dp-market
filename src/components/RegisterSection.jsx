import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterSection = () => {


    // Navigate to Dashboard
    const navigate = useNavigate(); 

    const handleNavigate = () => {
        navigate('/dashboard')
    }
    
    return (
        <form action="#">
            <div className="row gy-4">
                <div className="col-12">
                    <label for="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                    <div className="position-relative">
                        <input type="text" className="common-input common-input--bg common-input--withIcon" id="name" placeholder="Your full name"/>
                        <span className="input-icon"><img src="assets/images/icons/user-icon.svg" alt=""/></span>
                    </div>
                </div>
                <div className="col-12">
                    <label for="email" className="form-label mb-2 font-18 font-heading fw-600">Email</label>
                    <div className="position-relative">
                        <input type="email" className="common-input common-input--bg common-input--withIcon" id="email" placeholder="infoname@mail.com"/>
                        <span className="input-icon"><img src="assets/images/icons/envelope-icon.svg" alt=""/></span>
                    </div>
                </div>
                
                <div className="col-12">
                    <label for="your-password" className="form-label mb-2 font-18 font-heading fw-600">Password</label>
                    <div className="position-relative">
                        <input type="password" className="common-input common-input--bg common-input--withIcon" id="your-password" placeholder="6+ characters, 1 Capital letter"/>
                        <span className="input-icon toggle-password cursor-pointer" id="#your-password"><img src="assets/images/icons/lock-icon.svg" alt=""/></span>
                    </div>
                </div>
                <div className="col-12">
                    <div className="common-check my-2">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="agree"/>
                        <label className="form-check-label mb-0 fw-400 font-16 text-body" for="agree">I agree to the terms &amp; conditions</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-main btn-lg w-100 pill" onClick={handleNavigate}>
                        Create An Account
                    </button>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-outline-light btn-lg-icon btn-lg w-100 pill">
                        <span className="icon icon-left"><img src="assets/images/icons/google.svg" alt=""/></span> 
                        Sign up with google
                    </button>
                </div>
                <div className="col-sm-12 mb-0">
                    <div className="have-account">
                        <p className="text font-14">Already a member? 
                            <Link to="/login" className="link text-main text-decoration-underline fw-500">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default RegisterSection;